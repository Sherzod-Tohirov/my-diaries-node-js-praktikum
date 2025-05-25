const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const hbsHelpers = require("./helpers/hbs.helpers");
const { sequelize } = require("./models/index");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parse json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set viewer hbs
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    helpers: hbsHelpers,
  })
);

app.set("view engine", ".hbs");

// Initialize routes
app.use("/", require("./routes/index.route"));
app.use("/diary", require("./routes/diary.route"));

// Sync database
const start = () => {
  sequelize
    .sync()
    .then(() => {
      console.log("Database synced");
    })
    .catch((err) => {
      console.error("Unable to sync database", err);
    });
};

start();

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
