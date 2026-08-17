# Montu Server

Backend server built with Node.js, TypeScript, and Express.

## Setup

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=3000
```

## Health Check

```http
GET /ping
```

Returns:

```json
{
  "message": "pong"
}
```

## Structure

```text
src/
├── controllers/
├── middleware/
├── models/
├── routes/
└── app.ts
```
