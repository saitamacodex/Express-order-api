const app = require("./src/app.js");
const connectDb = require("./src/config/db.js");

require("dotenv").config();
const PORT = process.env.PORT;

// db connection
connectDb();

// server starting
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
