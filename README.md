# Montu INternship Foundations

Backend server built with Node.js, TypeScript, and Express.

## Setup

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
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
├── config/
├── controllers/
├── middleware/
├── models/
└── routes/
```

## Database

MongoDB is connected using Mongoose. The `User` model supports name, email, password hash, and role.
