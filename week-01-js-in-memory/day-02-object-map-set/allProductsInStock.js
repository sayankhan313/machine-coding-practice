function allProductsInStock(products) {
const allproducts= products.every((items)=>items.stock>0)

return  allproducts
}
const products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Keyboard", stock: 3 }
];

console.log(allProductsInStock(products));