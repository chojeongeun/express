const express = require("express");

const PORT = 4000;

const Users = [
  {
    id: 0,
    name: "Jack",
  },
  {
    id: 1,
    name: "Jannifer",
  },
];

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();

  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get("/users", (req, res) => {
  res.send(Users);
});

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.get("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Running port on ${PORT}`);
});
