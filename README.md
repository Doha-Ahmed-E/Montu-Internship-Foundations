# Montu INternship Foundations

Node.js + Express + TypeScript backend with MongoDB authentication.

## Features

- Express server with `/ping` health check
- MongoDB Atlas integration using Mongoose
- User registration with validation
- Password hashing with bcrypt
- Email verification using a 6-digit code
- JWT-based login authentication
- Environment variable configuration

## Structure

```text
src/
├── config/
│   └── database.ts
├── controllers/
│   └── auth.controller.ts
├── middleware/
│   ├── error.middleware.ts
│   └── validation.middleware.ts│   
│       
├── models/
│   └── user.model.ts
├── routes/
│   ├── auth.routes.ts
│   └── health.routes.ts
├── services/
│   ├── auth.service.ts
│   └── email.service.ts
├── utils/
│   └── AppError.ts
└── app.ts
````

## Setup

```bash
npm install
```

Create `.env` like `.env.example`:

`EMAIL_PASSWORD` should be a Gmail App Password, not the regular Gmail password.

## Run

```bash
npm run dev
```

Server:

```text
http://localhost:3000
```

## Auth Endpoints

### Health Check

```http
GET /ping
```

### Sign Up

```http
POST /api/auth/signup
```

```json
{
  "name": "name",
  "email": "user@example.com",
  "password": "password123"
}
```

Creates an unverified user and sends an email verification code.

### Verify Email

```http
POST /api/auth/verify-email
```

```json
{
  "email": "user@example.com",
  "code": "123456"
}
```

### Sign In

```http
POST /api/auth/signin
```

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Returns a JWT after successful email verification.

