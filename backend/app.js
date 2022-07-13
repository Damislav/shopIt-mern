const express = require("express");
const app = express();
const erorrMiddleware = require("./middlewares/errors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// ¸import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
app.use("/api/v1", products);
app.use("/api/v1", auth);
// ¸middleware to handle errors
app.use(erorrMiddleware);

module.exports = app;
