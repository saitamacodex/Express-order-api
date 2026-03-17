// Entry point
const express = require("express");
const orderRoutes = require("./routes/orderRoutes");
const app = express();
const port = 9000;

// middleware
app.use(express.json());

// routes
app.use("/orders", orderRoutes);

// listern on port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
