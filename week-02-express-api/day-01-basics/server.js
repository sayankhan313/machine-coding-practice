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

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.get("/products/count", (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length
  });
});



app.get("/products", (req, res) => {
  const { minPrice } = req.query;

  if (minPrice === undefined) {
    return res.status(200).json(products);
  }

  const min = Number(minPrice);

  if (
    minPrice.trim() === "" ||
    !Number.isFinite(min) ||
    min < 0
  ) {
    return res.status(400).json({
      success: false,
      error: "minPrice must be a non-negative number"
    });
  }

  const filteredProducts = products.filter(
    (product) => product.price >= min
  );

  return res.status(200).json(filteredProducts);
});
// TODO: GET /products/:id
// Find product using route parameter.
// Return 404 if product does not exist.

app.get("/products", (req, res) => {
  const { minPrice, maxPrice } = req.query;

  let min = null;
  let max = null;

  if (minPrice !== undefined) {
    min = Number(minPrice);

    if (
      minPrice.trim() === "" ||
      !Number.isFinite(min) ||
      min < 0
    ) {
      return res.status(400).json({
        success: false,
        error: "Invalid minimum price"
      });
    }
  }

  if (maxPrice !== undefined) {
    max = Number(maxPrice);

    if (
      maxPrice.trim() === "" ||
      !Number.isFinite(max) ||
      max < 0
    ) {
      return res.status(400).json({
        success: false,
        error: "Invalid maximum price"
      });
    }
  }

  if (min !== null && max !== null && min > max) {
    return res.status(400).json({
      success: false,
      error: "Minimum price cannot exceed maximum price"
    });
  }

  const filteredProducts = products.filter((product) => {
    if (min !== null && product.price < min) return false;
    if (max !== null && product.price > max) return false;

    return true;
  });

  return res.status(200).json(filteredProducts);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});