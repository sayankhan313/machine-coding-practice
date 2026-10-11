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

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(
    (product) => product.id === id
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      error: "Product not found"
    });
  }

  return res.status(200).json({
    success: true,
    data: product
  });
});

if (Number.isNaN(id)) {
  return res.status(400).json({
    success: false,
    error: "Product ID must be a number"
  });
}
// TODO: GET /products/:id
// Find product using route parameter.
// Return 404 if product does not exist.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});