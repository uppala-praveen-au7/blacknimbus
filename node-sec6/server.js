const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const indexRoute = require("./routes/_indexRoute");

app.use("/", indexRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(3000, () => {
  console.log("server running . . .");
});
