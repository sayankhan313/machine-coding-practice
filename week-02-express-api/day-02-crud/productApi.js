import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 900, stock: 5 },
  { id: 2, name: "Mouse", price: 30, stock: 10 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

// TODO: POST /products
// Validate product.
// Reject duplicate IDs.
// Add product.

// TODO: GET /products/:id
// Find one product.

// TODO: PUT /products/:id
// Update existing product.

// TODO: DELETE /products/:id
// Delete existing product.

app.listen(PORT, () => {
  console.log(`Product API running on port ${PORT}`);
});