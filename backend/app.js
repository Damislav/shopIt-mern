const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");
const erorrMiddleware = require("./middlewares/errors");
const morgan = require("morgan");
require("dotenv").config();

app.use(morgan("dev"));
app.use(fileUpload());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting up cloudinary configuration
cloudinary.config({
  cloud_name: "flex-computers",
  api_key: "917316584438263",
  api_secret: "wgDI-6JRZwo0B4G66dpx-GxTEA8",
});

// ¸import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");
const payment = require("./routes/payment");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", payment);
// ¸middleware to handle errors
app.use(erorrMiddleware);

module.exports = app;
