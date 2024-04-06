# Projeto API de Autenticação Simples

Este projeto é uma API de autenticação simples construída com Node.js e Express, utilizando uuid para geração de IDs únicos para os usuários e bcrypt para hashing de senhas, garantindo uma segurança eficiente no armazenamento das senhas.

## Funcionalidades

-Registro de usuário com e-mail e senha.

- Login de usuário com verificação de e-mail e senha.

## Tecnologias Utilizadas

- Node.js
- Express
- bcrypt para hashing de senhas
- uuid para geração de IDs únicos
- Banco de dados MySQL

## Como Executar

Certifique-se de ter o Node.js instalado em sua máquina antes de seguir os passos abaixo.

## Criando banco de dados

```bash
create database nome-do-seu-banco-de-dados;

use nome-do-seu-banco-de-dados;

CREATE TABLE users (
	id varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,

    primary key (id)
);
```

## Clone o repositório:

```bash
git clone https://github.com/vitorkravs/rede-social-api.git

cd <NOME_DO_DIRETORIO>

npm install
```

## Configure o ambiente:

Crie o arquivo .env e preencha as variáveis de ambiente conforme necessário, incluindo a string de conexão com o banco de dados.

```bash

DB_HOST=localhost
DB_PASSWORD=senha-do-banco-de-dados
DB_USER=seu-usuario
DB_DATABASE=nome-do-seu-banco-de-dados

```

## Execute o projeto:

```bash
npm run dev
```

O projeto vai rodar em http://localhost:8080

## Endpoints

### Registro de Usuário

- register (http://localhost:8080/user/register)
Método: POST

Corpo da Requisição:
json

```bash
{
    "email": "usuario@example.com",
    "password": "senha123",
    "confirmPassword": "senha123"
}
```

Resposta:

```bash
{
    "msg": "Usuário registrado com sucesso."
}
```

### Login de Usuário

- login (http://localhost:8080/user/login)

Método: POST

Corpo da Requisição:
json

```bash
{
    "email": "usuario@example.com",
    "password": "senha123"
}
```

Resposta:

Corpo:

```bash
{
    "msg": "Usuário logado com sucesso"
}
```

## Segurança

Este projeto utiliza bcrypt para hashing de senhas, garantindo que as senhas dos usuários não sejam armazenadas em texto plano no banco de dados. Além disso, cada usuário recebe um ID único gerado pelo uuid, o que ajuda a evitar conflitos e aumenta a segurança.

## Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para criar um fork do projeto, fazer suas alterações e submeter um Pull Request.
