# Express Order API

A simple RESTful API built using Node.js and Express for managing food orders.

## 🚀 Features

- Create Order
- Get All Orders
- Get Order by id
- Delete Order
- Filter Orders using Query Params

## 🛠️ Tech Stack

- Node.js
- Express.js

## 📦 Installation

```bash
npm install
```

## ▶️ Run Server

```bash
node server.js
```

Server runs on:

```
http://localhost:${PORT}
```

---

## 📌 API Endpoints

### Get All Orders

```
GET /orders
```

### Get Order by ID

```
GET /orders/:id
```

### Create Order

```
POST /orders
```

### Update Order

```
PUT /orders/:id
```

### Delete Order

```
DELETE /orders/:id
```

---

## 🔍 Query Parameters

Filter orders:

```
GET /orders?item=Biriyani&qty=2
```

---

## 📌 Example Request

```json
{
  "item": "Veg Frid-rice",
  "qty": 5,
  "price": 100
}
```

---

## 📌 Future Improvements

- Add database (MongoDB) -> Completed
- Add validation middleware
- Add authentication (JWT)

---
