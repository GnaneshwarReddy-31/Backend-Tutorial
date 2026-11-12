# Backend Tutorial (Node.js, Express & MongoDB)

A beginner-friendly REST API built with Node.js, Express, and MongoDB following the Model-Route-Controller (MVC/MRC) architecture.

> Developed as part of the Web Programming course backend tutorial assignment.

---

## 🛠️ Tech Stack & Dependencies

* **Runtime:** Node.js
* **Framework:** Express.js (`express`)
* **Database & ODM:** MongoDB Atlas with Mongoose (`mongoose`)
* **Security:** Password hashing with `bcrypt`
* **Environment Config:** `dotenv`
* **Development Server:** `nodemon`

---

## 📁 Project Structure

```text
Backend-Tutorial/
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constants.js       # Port and environment constants
│       │   └── database.js        # MongoDB Mongoose connection handler
│       ├── controllers/
│       │   ├── user.controller.js # Auth (register, login, get all)
│       │   └── post.controller.js # Full CRUD operations for Posts
│       ├── models/
│       │   ├── user.model.js      # User schema (username, email, password)
│       │   └── post.model.js      # Post schema (title, content, author ref)
│       ├── routes/
│       │   ├── user.route.js      # Express user endpoints
│       │   └── post.route.js      # Express post CRUD endpoints
│       ├── app.js                 # Express application & middleware setup
│       └── index.js               # Server entry point
├── .env.example                   # Sample environment configuration
├── .gitignore                     # Git ignore rules
├── package.json                   # Project scripts and dependencies
└── README.md                      # Project documentation and API testing guide
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/GnaneshwarReddy-31/Backend-Tutorial.git
cd Backend-Tutorial
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root folder with:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the server
```bash
# Development mode with nodemon:
npm run dev

# Or production start:
npm start
```

---

## 📡 API Endpoints & Postman Testing Guide

### 👤 User Endpoints (`/api/v1/users`)

| Method | Endpoint | Description | Request Body (JSON) |
|---|---|---|---|
| `POST` | `/api/v1/users/register` | Register a new user | `{"username": "john_doe", "email": "john@example.com", "password": "password123"}` |
| `POST` | `/api/v1/users/login` | Login user & verify password | `{"email": "john@example.com", "password": "password123"}` |
| `GET` | `/api/v1/users/` | Get all registered users | *None* |

### 📝 Post CRUD Endpoints (`/api/v1/posts`)

| Method | Endpoint | Description | Request Body (JSON) |
|---|---|---|---|
| `POST` | `/api/v1/posts/` | **Create** a new post | `{"title": "My First Post", "content": "Exploring Node.js backend development", "author": "<USER_OBJECT_ID>"}` |
| `GET` | `/api/v1/posts/` | **Read** all posts | *None* |
| `GET` | `/api/v1/posts/:id` | **Read** single post by ID | *None* |
| `PUT` | `/api/v1/posts/:id` | **Update** post title/content | `{"title": "Updated Title", "content": "Updated content text"}` |
| `DELETE` | `/api/v1/posts/:id` | **Delete** post by ID | *None* |

---

## 🧪 Postman Testing Workflow

1. Open Postman desktop app.
2. Register a new user using `POST http://localhost:8000/api/v1/users/register`.
3. Copy the returned `_id` of the user.
4. Create a post using `POST http://localhost:8000/api/v1/posts/` passing the `author` ID.
5. Use `GET`, `PUT`, and `DELETE` requests to test full CRUD behavior on `http://localhost:8000/api/v1/posts/<POST_ID>`.
