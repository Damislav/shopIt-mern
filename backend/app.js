const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");
const erorrMiddleware = require("./middlewares/errors");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(fileUpload());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ¸import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
// ¸middleware to handle errors
app.use(erorrMiddleware);

module.exports = app;
