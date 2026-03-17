# Express Order API

A simple RESTful API built using Node.js and Express for managing food orders.

## 🚀 Features

* Create Order
* Get All Orders
* Get Order by ID
* Delete Order
* Filter Orders using Query Params 

## 🛠️ Tech Stack

* Node.js
* Express.js

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
http://localhost:9090
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
  "item": "Biriyani",
  "qty": 2
}
```

---

## 📌 Future Improvements

* Add database (MongoDB/PostgreSQL)
* Add validation middleware
* Add authentication (JWT)

---
