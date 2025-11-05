const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/date", (req, res) => {
  res.send(Date());
});

app.post("/submit-form", (req, res) => {
  res.send("Form submitted!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
