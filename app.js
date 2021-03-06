const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  compression = require("compression"),
  helmet = require("helmet"),
  cors = require("cors"),
  logger = require("morgan");

require("dotenv").config();

var usersRouter = require("./routes/users");
var phrasesRouter = require("./routes/phrases");
var translateRouter = require("./routes/translate");

var app = express();

app.use(compression());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/phrases", phrasesRouter);
app.use("/translate", translateRouter);

module.exports = app;
