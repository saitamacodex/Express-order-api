// const orders = require("../../data/order");

// this file is for ref - migrated to mongodb

// get all orders
exports.getOrders = function (req, res) {
  const { item, qty } = req.query;
  let filterOrder = orders;
  if (item) {
    filterOrder = filterOrder.filter(
      (order) => order.item.toLowerCase() === item.toLowerCase(),
    );
  }

  if (qty) {
    filterOrder = filterOrder.filter((order) => order.qty === Number(qty));
  }
  res.json({ order: filterOrder });
};

// create new order
exports.createOrder = function (req, res) {
  const newOrder = req.body;

  const addIdToOrder = {
    id: orders.length + 1,
    ...newOrder,
  };
  orders.push(addIdToOrder);
  res.status(201).json({
    message: "Order Recieved",
    order: addIdToOrder,
  });
};

// get order by id
exports.getOrderById = function (req, res) {
  const orderID = Number(req.params.id);
  const findOrder = orders.find((item) => item.id === orderID);

  if (!findOrder) {
    return res.status(404).json({
      message: "Order not found",
    });
  }
  res.json(findOrder);
};

// delete order by id
exports.deleteOrder = function (req, res) {
  const orderID = Number(req.params.id);
  const findOrderIndex = orders.findIndex((item) => item.id === orderID);

  if (findOrderIndex === -1) {
    return res.status(404).json({
      message: "Order not found",
    });
  }
  const deletedOrder = orders.splice(findOrderIndex, 1);
  res.json({
    message: "Order Deleted",
    order: deletedOrder[0],
  });
};
