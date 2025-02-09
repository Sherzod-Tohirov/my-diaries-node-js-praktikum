const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const hbsHelpers = require("./helpers/hbs-helpers");

const app = express();

// Set up Handlebars
const hbs = exphbs.create({
  helpers: hbsHelpers,
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
