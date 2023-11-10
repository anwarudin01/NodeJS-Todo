import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { todos });
});

app.post("/add", (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  todos.splice(id, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
