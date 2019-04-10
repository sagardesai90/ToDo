# To Do App 
This is a simple to do app with a react front end, and noSQL back end.

## Available Scripts


### Requirements
- NPM or Yarn

npm --version: 6.7.0

node --version: v11.10.1

From the /client folder, you can run:
```
npm install - installs front end app
```

From the root, you can run:
```
npm install
npm run server - runs the backend
npm run dev - runs the backend and client servers concurrently
```
Once

Runs the app in development mode. Open http://localhost:3000 to view it in the browser!

## Endpoint Documentation

Endpoint: http://localhost:5000/api/users

Type: POST

This endpoint is for creating a new user. 

Endpoint: http://localhost:5000/api/tasks/

Type: POST

This endpoint is for adding a new task. Is a protected route, so you need to be logged in.

Endpoint: http://localhost:5000/api/tasks

Type: GET

This endpoint gets all a users tasks. Protected route.