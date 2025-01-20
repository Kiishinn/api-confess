var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// Rute untuk aplikasi
var indexRouter = require("./app-server/routes/index");
var usersRouter = require("./app-server/routes/users");
var confessesRouter = require("./app-server/routes/confessRoute"); // Ganti 'todoRouter' menjadi 'confessesRouter'
var taggedRouter = require("./app-server/routes/taggedRoute"); // Impor taggedRoute.js

// Koneksi ke MongoDB
const mongoose = require("mongoose");
require("./app-server/model/db"); // Pastikan koneksi ke DB sudah benar

var app = express();

// Enable CORS
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// View engine setup (optional, jika menggunakan ejs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.use("/", indexRouter);  // Home route
app.use("/users", usersRouter);  // Users route
app.use("/confesses", confessesRouter);  // Mengganti 'confess' menjadi 'confesses'
app.use("/tagged", taggedRouter);  // Menambahkan route tagged

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(500).json({
    message: "Something went wrong!",  // Menampilkan pesan error
    error: err.message,
  });
});

module.exports = app;
