# Frontend do Chat em Tempo Real

Por Marcelo Guimarães  
Desenvolvedor com 7+ anos de experiência, focado em Java Spring Boot, com sólida atuação em Laravel, PostgreSQL, React. Domínio em APIs RESTful, Spring Security e Data JPA. Formado em Análise e desenvolvimento de sistemas, Gestão Comercial e Pós graduação em Inteligência Artificial, Machine Learning.

## Importante ⚠️
Este frontend faz parte de um projeto completo de chat em tempo real e requer o backend em Spring Boot para funcionar. Certifique-se de ter o backend rodando antes de iniciar o frontend.

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o projeto:
```bash
ng serve
```

3. Acesse `http://localhost:4200`

## Integrando com o Backend

O frontend se conecta automaticamente ao WebSocket do backend em:
```
ws://localhost:8081/chat
```

Para testar o chat completo:
1. Inicie o backend Spring Boot
2. Inicie este frontend Angular
3. Abra múltiplas abas no navegador
4. Entre com usuários diferentes em cada aba
5. Comece a conversar!
