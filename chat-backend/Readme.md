# Backend do Chat em Tempo Real

Por Marcelo Guimarães  
Desenvolvedor com 7+ anos de experiência, focado em Java Spring Boot, com sólida atuação em Laravel, PostgreSQL, React. Domínio em APIs RESTful, Spring Security e Data JPA. Formado em Análise e desenvolvimento de sistemas, Gestão Comercial e Pós graduação em Inteligência Artificial, Machine Learning.

## Importante ⚠️
Este backend fornece o servidor WebSocket necessário para o frontend Angular. Para ter o chat funcionando completamente, você precisa rodar ambos os projetos.

## Instalação

1. Compile o projeto:
```bash
mvn clean install
```

2. Inicie o servidor:
```bash
mvn spring-boot:run
```

O servidor WebSocket estará disponível em:
```
ws://localhost:8081/chat
```

## Integrando com o Frontend

1. Certifique-se que este backend está rodando
2. Inicie o frontend Angular
3. O frontend se conectará automaticamente a este servidor WebSocket
4. As mensagens serão transmitidas em tempo real entre todas as instâncias conectadas