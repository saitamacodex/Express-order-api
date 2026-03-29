const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "Item name is required"],
    trim: true,
    lowercase: true,
  },

  qty: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  totalAmount: {
    type: Number,
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "delivered", "cancelled"],
    default: "pending",
  },
});

orderSchema.pre("save", async function () {
  this.totalAmount = this.qty * this.price;
});

const orderModel = mongoose.model("Orders", orderSchema);
module.exports = orderModel;
