const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

// middleware to parse json body
app.use(express.json());

// routes
app.use("/orders", orderRoutes);

module.exports = app;
