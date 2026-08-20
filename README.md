# Montu Internship Foundations

## Project structure

```text
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── config/
├── types/
├── utils/
└── app.ts
```

## Current Features

* Health check endpoint

  * GET /ping

* Authentication

  * POST /api/auth/signup
  * POST /api/auth/verify-email
  * POST /api/auth/signin
  * JWT authentication middleware
  * Password hashing with bcrypt
  * Email verification using Brevo

* Profile management

  * GET /api/profile
  * PATCH /api/profile

* Tasks management

  * POST /api/tasks
  * GET /api/tasks
  * GET /api/tasks/:id
  * PATCH /api/tasks/:id
  * DELETE /api/tasks/:id

* Request validation

  * Request validation using express-validator

* Database

  * MongoDB Atlas with Mongoose

* Deployment

  * Railway

## How to run locally

```bash
# Create a .env file and fill in the required environment variables

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run in production
npm run start
```

## Railway project

* [Deployed Railway project](https://montu-internship-foundations-production.up.railway.app/)

## API Documentation

* Postman Collection: [Montu_Foundations_postman_collection.json](Montu_Foundations_postman_collection.json)
