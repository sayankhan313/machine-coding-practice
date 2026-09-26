function hasExpensiveProduct(products) {
const expensive= products.some((items)=>{
    if(items.price>500){
        return true
    }

})
return expensive
}

const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 70 }
];

console.log(hasExpensiveProduct(products));