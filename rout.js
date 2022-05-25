const express = require("express");
const port = 3400;
const app = express();

app.get("/", (req, res) => {
  res.json("Hello world");
});
app.get("/users", (req, res) => {
  res.json(["user1", "user2", "user3"]);
});
app.post("/users", (req, res) => {
  res.json("юзер добавлен");
});
app.post("/admin", (req, res) => {
  res.json("не хватает прав доступа");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
