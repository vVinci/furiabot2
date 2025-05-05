# FuriaBot - Assistente Virtual da FURIA GG

## Descrição
O FuriaBot é um assistente virtual baseado em IA desenvolvido para fornecer informações e interagir com os fãs da FURIA. Este chatbot é especializado em discutir exclusivamente sobre a organização FURIA GG e seus jogos, incluindo Counter-Strike, Valorant, Apex Legends e outros títulos nos quais a FURIA possui equipes.

## Funcionalidades
- Interface de chat amigável e responsiva
- Respostas em tempo real sobre a FURIA GG
- Conhecimento sobre:
  - Jogadores e equipes da FURIA
  - História da organização
  - Jogos nos quais a FURIA compete
  - Estratégias e mecânicas dos jogos
  - Torneios e competições

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- API OpenRouter para processamento de linguagem natural

## Como Usar
1. Abra o arquivo `index.html` em seu navegador
2. Digite sua mensagem na caixa de texto
3. Pressione Enter ou clique no botão "Send" para enviar sua mensagem
4. O assistente responderá com informações relevantes sobre a FURIA GG

## Limitações
- O assistente só responde a perguntas relacionadas à FURIA GG e seus jogos
- Se perguntado sobre outros tópicos, o assistente redirecionará a conversa de volta para a FURIA GG

## Nota de Segurança
A segurança da API é uma prioridade crítica que será implementada nas próximas atualizações. As melhorias planejadas incluem:
- Autenticação robusta com tokens JWT
- Rate limiting para prevenir abusos

## Planos Futuros
O FuriaBot está em cevolução e planeja implementar as seguintes melhorias:

### Expansão Tecnológica
- Migração para Node.js e React para melhor escalabilidade, performance e interface moderna
- Desenvolvimento de versão mobile multiplataforma com React Native para iOS e Android
- Utilização de arquitetura reativa para melhor experiência do usuário e atualizações em tempo real
- Implementação de sistema de autenticação com login e senha
- Integração com redes sociais para login simplificado

### Coleta e Análise de Dados
- Sistema de coleta de dados dos usuários para:
  - Melhorar a experiência do usuário
  - Personalizar as interações
  - Entender os interesses dos fãs
  - Gerar estatísticas e insights sobre a comunidade
- Implementação de dashboard administrativo para análise de dados
- Sistema de feedback para melhorias contínuas

### Novas Funcionalidades
- Chat em tempo real entre usuários
- Notificações personalizadas sobre eventos da FURIA
- Sistema de recompensas e gamificação
- Integração com plataformas de streaming

## Desafios Técnicos e Próximos Passos

Durante o desenvolvimento e testes, identificamos algumas limitações técnicas que precisam ser endereçadas:

### Atualização de Dados
A atualização de dados tem apresentado desafios significativos: os dados fornecidos pela API atual estão desatualizados, as tentativas de web scraping do HLTV.org foram bloqueadas por medidas anti-bot, e a integração com a Liquipedia enfrentou problemas em que a API utilizada não conseguiu identificar os dados vindo do site Liquipedia.

### Solução Proposta
A visão é unificar os dois desafios propostos - criar um aplicativo da FURIA com chatbot inteligente - em uma única solução robusta e ele pode ser o quão grande precisar.

Fazendo com que os usuários façam login já teremos algumas informações básicas e podemos pedir para que façam link com as redes sociais, botar parcerias com lojas e utilizar os dados para entender melhor os nossos fãs.

Com tempo adicional, poderemos entregar uma solução completa e integrada que atenda todas as necessidades identificadas.

O link do repositorio enviado está sem api, mas basta adicionar uma gratuita do OpenRouter para ver funcionando direto da sua maquina.