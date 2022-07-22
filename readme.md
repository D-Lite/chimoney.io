# CHIMONEY BLOG API

This is a demo application for building a BLOG API. In this demo, we will do CRUD operations on stories, categories.

Node APIs and MongoDB go hand-in-hand. This demo app uses:

- [Node.js]
- [Express](https://expressjs.com/) - Fast and low overhead web framework
- [MongoDB](https://www.mongodb.com/) on [DigitalOcean](https://www.digitalocean.com/products/managed-databases/)
- [MongoDB NodeJS Driver](https://www.npmjs.com/package/mongodb) - Connect Node to MongoDB

## Routes

The routes for this app are:

 `AUTH`:
- `POST /auth/login`: Login to an account
- `POST /auth/register`: Register a new user
- `POST /auth/`: Register a new user

`AUTH`:
- `GET /api/categories`: Get all categories
- `POST /api/categories`: Add a new category
- `PUT /api/categories/{id}`: Update a category
- `GET /api/categories/{id}`: Get a category
- `DELETE /api/categories/{id}`: Delete a category


`POSTS (stories)`:
- `GET /api/stories`: Get all stories
- `POST /api/stories`: Add a new stories
- `PUT /api/stories/{id}`: Update a story
- `GET /api/stories/{id}`: Get a story
- `DELETE /api/stories/{id}`: Delete a story
