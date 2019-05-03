const express = require("express");
const app = express();
const usersRouter = require("./router/usersRouter");
const indexRouter = require("./router/indexRouter");

app.use(express.json());
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("My Express");
});
