const express = require("express");
const usersController = require("./controllers/users.controller");
const postsController = require("./controllers/posts.controller");
const PORT = 4000;

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get("/users", usersController.getUsers);
app.get("/users/:userId", usersController.getUser);
app.post("/users", usersController.postUser);

app.get("/posts", postsController.getPost);

app.listen(PORT, () => {
  console.log(`Running port on ${PORT}`);
});
