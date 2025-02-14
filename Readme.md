# Chat em Tempo Real com Spring Boot e Angular

## Autor

**Marcelo Guimarães**

Desenvolvedor com 7+ anos de experiência, focado em Java Spring Boot, com sólida atuação em Laravel, PostgreSQL, React. Domínio em APIs RESTful, Spring Security e Data JPA. Formado em Análise e Desenvolvimento de Sistemas, Gestão Comercial e Pós-graduação em Inteligência Artificial/Machine Learning.

## Sobre o Projeto

Sistema de chat em tempo real implementando comunicação WebSocket bidirecional entre servidor Spring Boot e cliente Angular.

## Tecnologias Utilizadas

### Backend
- Java 17
- Spring Boot
- WebSocket
- Maven

### Frontend
- Angular 17
- TypeScript
- WebSocket API
- Node.js/npm

## Pré-requisitos

- Java 17 ou superior
- Node.js 18 ou superior
- npm 9 ou superior
- Maven 3.8 ou superior

## Instalação e Execução

### Backend (Spring Boot)

1. Entre na pasta do backend:
```bash
cd chat-backend
```

2. Instale as dependências e compile:
```bash
mvn clean install
```

3. Execute o servidor:
```bash
mvn spring-boot:run
```

O backend estará disponível em `http://localhost:8081`

### Frontend (Angular)

1. Entre na pasta do frontend:
```bash
cd chat-frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o cliente:
```bash
ng serve
```

O frontend estará disponível em `http://localhost:4200`

## Funcionalidades

- Chat em tempo real com múltiplos usuários
- Identificação de usuários por nome
- Diferenciação visual entre mensagens próprias e de outros usuários
- Interface responsiva e intuitiva
- Conexão WebSocket para comunicação instantânea

## Uso

1. Abra `http://localhost:4200` no navegador
2. Digite seu nome de usuário
3. Comece a trocar mensagens em tempo real
4. Abra múltiplas abas para testar a comunicação entre diferentes usuários

## Estrutura do Projeto

### Backend
```
chat-backend/
├── src/main/java/com/example/chatbackend/
│   ├── config/
│   │   └── WebSocketConfig.java
│   ├── model/
│   │   └── ChatMessage.java
│   └── websocket/
│       └── ChatWebSocketHandler.java
```

### Frontend
```
chat-frontend/
├── src/app/
│   ├── chat/
│   │   └── chat.component.ts
│   └── app.component.ts
```

## Licença

Este projeto está sob a licença MIT.