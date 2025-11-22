#🚀 CRUD em TypeScript com Fastify, Prisma e MongoDB

Este projeto é um CRUD completo desenvolvido com TypeScript, usando Fastify como framework web, Prisma ORM para acesso ao banco e MongoDB como banco de dados não relacional.
O objetivo foi criar uma API REST moderna, performática, escalável e seguindo boas práticas de arquitetura.



##🧰 Tecnologias Utilizadas
###🔹 TypeScript

Linguagem que adiciona tipagem estática ao JavaScript, trazendo mais segurança e organização ao projeto.

###🔹 Fastify — Framework da API REST

Usado para criar o servidor HTTP. É mais rápido e leve que Express, ideal para APIs modernas.

###🔹 Prisma ORM

Responsável pela integração com o banco.
Com ele foi possível:

Modelar dados no arquivo schema.prisma

Gerar o Prisma Client tipado automaticamente

Acessar o banco com intellisense e tipagem forte

###🔹 MongoDB

Banco de dados NoSQL, orientado a documentos.
Foi utilizado como armazenamento dos registros do CRUD.


###🔹 Insomnia

Ferramenta usada para testar requisições HTTP (GET, POST, PUT, DELETE).





## 🧱 Arquitetura do Projeto

A API foi organizada seguindo uma arquitetura em camadas, separando bem as responsabilidades entre servidor, rotas, controllers, services e acesso ao banco via Prisma.

### 📌 Visão geral das pastas
```bash
src
 ┣ 📂 controllers   # Camada de controle (entrada da requisição)
 ┣ 📂 prisma        # Configuração e instância do Prisma Client
 ┣ 📂 services      # Regras de negócio / lógica da aplicação
 ┣ 📜 routes.ts     # Definição das rotas da API
 ┗ 📜 server.ts     # Inicialização do servidor Fastify


