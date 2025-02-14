package com.example.chat_backend.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import com.example.chat_backend.model.ChatMessage;

import java.util.HashMap;
import java.util.Map;

@Component
public class ChatWebSocketHandler extends TextWebSocketHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final Map<String, WebSocketSession> sessions = new HashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("Conexão estabelecida: " + session.getId());
        sessions.put(session.getId(), session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String messagePayload = message.getPayload();
        System.out.println("Mensagem recebida: " + messagePayload);

        ChatMessage chatMessage = objectMapper.readValue(messagePayload, ChatMessage.class);
        String outMessage = objectMapper.writeValueAsString(chatMessage);

        sessions.forEach((sessionId, currentSession) -> {
            if (currentSession.isOpen() && !sessionId.equals(session.getId())) {
                try {
                    currentSession.sendMessage(new TextMessage(outMessage));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, org.springframework.web.socket.CloseStatus status) throws Exception {
        System.out.println("Conexão fechada: " + session.getId());
        sessions.remove(session.getId());
    }
}