import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  username: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-container">
      <h1>Chat em Tempo Real</h1>

      <div class="username-area" *ngIf="!username">
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          [(ngModel)]="usernameInput"
          (keyup.enter)="setUsername()"
        >
        <button (click)="setUsername()">Entrar</button>
      </div>

      <div *ngIf="username" class="chat-area">
        <div class="messages-area">
          <ul class="messages-list">
            <li *ngFor="let msg of messages" [class.own-message]="msg.username === username">
              <strong>{{ msg.username }}:</strong> {{ msg.message }}
            </li>
          </ul>
        </div>

        <div class="input-area">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            [(ngModel)]="messageInput"
            (keyup.enter)="sendMessage()"
          >
          <button (click)="sendMessage()">Enviar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .username-area {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .messages-area {
      height: 400px;
      overflow-y: auto;
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 20px;
    }

    .messages-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .messages-list li {
      margin-bottom: 10px;
      padding: 8px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }

    .messages-list li.own-message {
      background-color: #e3f2fd;
      text-align: right;
    }

    .input-area {
      display: flex;
      gap: 10px;
    }

    input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class ChatComponent implements OnInit, OnDestroy {
  websocket: WebSocket | null = null;
  messageInput: string = '';
  usernameInput: string = '';
  username: string = '';
  messages: ChatMessage[] = [];

  ngOnInit(): void {
    // Aguarda o usuário definir o nome antes de conectar
  }

  ngOnDestroy(): void {
    this.disconnectWebSocket();
  }

  setUsername(): void {
    if (this.usernameInput.trim()) {
      this.username = this.usernameInput.trim();
      this.connectWebSocket();
    }
  }

  private connectWebSocket(): void {
    this.websocket = new WebSocket('ws://localhost:8123/chat');

    this.websocket.onopen = () => {
      console.log('Conexão WebSocket aberta');
    };

    this.websocket.onmessage = (event) => {
      const message: ChatMessage = JSON.parse(event.data);
      this.messages.push(message);
    };

    this.websocket.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };

    this.websocket.onerror = (error) => {
      console.error('Erro WebSocket:', error);
    };
  }

  private disconnectWebSocket(): void {
    if (this.websocket) {
      this.websocket.close();
    }
  }

  sendMessage(): void {
    if (this.websocket?.readyState === WebSocket.OPEN && this.messageInput.trim()) {
      const messagePayload: ChatMessage = {
        username: this.username,
        message: this.messageInput.trim()
      };

      this.websocket.send(JSON.stringify(messagePayload));
      this.messages.push(messagePayload); // Adiciona mensagem local
      this.messageInput = '';
    }
  }
}
