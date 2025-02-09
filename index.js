const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const hbsHelpers = require("./helpers/hbs.helpers");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    helpers: hbsHelpers,
  })
);

app.set("view engine", ".hbs");

// Initialize routes
app.use("/", require("./routes/diary.route"));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
