# Backend Tutorial

This is my backend assignment for Web Programming. Built using Node.js, Express and MongoDB.

It has two things — user accounts and posts. Users can register and login. Posts support full CRUD.

## How to run

```
npm install
```

Create a `.env` file:
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

Then start the server:
```
npm start
```

Server runs on `http://localhost:8000`

## API Routes

**Users**
- POST `/api/v1/users/register`
- POST `/api/v1/users/login`
- GET `/api/v1/users`

**Posts**
- POST `/api/v1/posts`
- GET `/api/v1/posts`
- GET `/api/v1/posts/:id`
- PUT `/api/v1/posts/:id`
- DELETE `/api/v1/posts/:id`

## Testing with Postman

Import the `BackendTutorial_Postman_Collection.json` file in Postman.

1. Register a user first
2. Copy the `_id` from the response
3. Use that id as `author` when creating a post
4. Then test GET, PUT, DELETE on posts
