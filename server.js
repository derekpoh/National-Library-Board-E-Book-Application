const express = require("express");
const path = require("path");
const logger = require("morgan");
require('dotenv').config();
require('./config/database');

const app = express();
const port = process.env.PORT || 3000;
const usersRouter = require("./routes/usersRouter");
const collectionsRouter = require('./routes/collectionsRouter');
const searchesRouter = require('./routes/searchesRouter')
const loansRouter = require("./routes/loansRouter")

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use("/api/users", usersRouter);
app.use("/api/books", collectionsRouter);
app.use("/api/search", searchesRouter);
app.use("/api/loans", loansRouter);

app.get("/api", (req, res) => {
  res.send("Hi!");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});