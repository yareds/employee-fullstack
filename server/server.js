const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const employeeRoute = require("./routes/employees");
const cors = require("cors");
const app = express();

/** Connecting our database with our App */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api/employees", employeeRoute);

// app.get("/", (req, res) => {
//   res.send(employees);
// });

/** setting up server */
app.listen(5000, () => {
  console.log("Server running on port 3000");
});
