const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

// ¸Handle uncaucht execptipon

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

dotenv.config({
  path: "backend/config/config.env",
});

// connecting to  database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server has started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// ¸handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
