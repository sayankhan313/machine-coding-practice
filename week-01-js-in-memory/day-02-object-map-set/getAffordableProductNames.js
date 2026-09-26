function getAffordableProductNames(products) {
  const affordableProducts = products.filter(
    (product) => product.price < 100
  );

  const names = affordableProducts.map(
    (product) => product.name
  );

  return names;
}

const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 70 },
  { id: 4, name: "Monitor", price: 250 }
];

console.log(getAffordableProductNames(products));