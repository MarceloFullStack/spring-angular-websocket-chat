package com.example.chat_backend.model;

public class ChatMessage {
    private String username;
    private String message;

    // Construtores
    public ChatMessage() {}

    public ChatMessage(String username, String message) {
        this.username = username;
        this.message = message;
    }

    // Getters e Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}