const Orders = require("../model/order.model");

// get all orders or by query param item/qty
exports.getOrders = async function (req, res) {
  const { item, qty } = req.query;
  try {
    const query = {};
    if (item) {
      query.item = { $regex: item, $options: "i" };
    }
    if (qty) {
      query.qty = Number(qty);
    }
    const order = await Orders.find(query);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// find order by id
exports.getOrderById = async function (req, res) {
  const _id = req.params.id;
  try {
    const findOrder = await Orders.findById(_id);
    if (!findOrder) {
      return res.status(404).json({
        message: "Order not found." + _id,
      });
    }
    res.status(200).json({
      findOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// create a order
exports.createOrder = async function (req, res) {
  try {
    const payload = req.body;
    const order = new Orders(payload);
    await order.save();

    res.status(201).json({
      status: "order created",
      order,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// delete a order
exports.deleteOrder = async function (req, res) {
  const _id = req.params.id;
  try {
    const deleteOrder = await Orders.findByIdAndDelete(_id);
    if (!deleteOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      message: "Order deleted",
      order: deleteOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
