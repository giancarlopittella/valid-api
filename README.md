# 🚀 ValidBR API

API REST desenvolvida para validação de dados brasileiros e gerenciamento de clientes.

## 📋 Funcionalidades

### CPF

* ✅ Validar CPF
* ✅ Gerar CPF válido

### CNPJ

* ✅ Validar CNPJ
* ✅ Gerar CNPJ válido

### CEP

* ✅ Consultar endereço através do ViaCEP

### Clientes

* ✅ Criar cliente
* ✅ Listar clientes
* ✅ Buscar cliente por ID
* ✅ Atualizar cliente
* ✅ Remover cliente

### Documentação

* ✅ Swagger UI integrado

---

## 🛠 Tecnologias Utilizadas

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* Swagger
* Axios
* cpf-cnpj-validator
* Nodemon

---

## 📂 Estrutura do Projeto

```text
src/
├── controllers/
├── routes/
├── services/
├── middlewares/
├── docs/
├── app.js

prisma/
├── schema.prisma

.env.example
.gitignore
package.json
README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta:

```bash
cd validbr-api
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` baseado no `.env.example`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/validbr"
PORT=3000
```

Execute as migrations:

```bash
npx prisma migrate dev --name init
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Inicie a aplicação:

```bash
npm run dev
```

---

## 📚 Documentação Swagger

Após iniciar a aplicação, acesse:

```text
http://localhost:3000/docs
```

---

## 🔗 Endpoints

### CPF

| Método | Endpoint               |
| ------ | ---------------------- |
| GET    | /validate/cpf/{cpf}    |
| GET    | /validate/generate/cpf |

### CNPJ

| Método | Endpoint                |
| ------ | ----------------------- |
| GET    | /validate/cnpj/{cnpj}   |
| GET    | /validate/generate/cnpj |

### CEP

| Método | Endpoint   |
| ------ | ---------- |
| GET    | /cep/{cep} |

### Clientes

| Método | Endpoint       |
| ------ | -------------- |
| GET    | /clientes      |
| POST   | /clientes      |
| GET    | /clientes/{id} |
| PUT    | /clientes/{id} |
| DELETE | /clientes/{id} |

---

## 💡 Objetivo do Projeto

Este projeto foi desenvolvido com foco em estudo e prática de desenvolvimento backend utilizando arquitetura em camadas, integração com banco de dados relacional, documentação de APIs e validação de dados brasileiros.

---

## 👨‍💻 Autor

Desenvolvido por Gian Carlo Pittella.
