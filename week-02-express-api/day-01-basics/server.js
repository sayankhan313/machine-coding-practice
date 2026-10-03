import express from "express";

const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 70 }
];

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Product API is running"
  });
});

// TODO: GET /products
// Return all products.

// TODO: GET /products/:id
// Find product using route parameter.
// Return 404 if product does not exist.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});