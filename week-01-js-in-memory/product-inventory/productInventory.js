function addProduct(products, newProduct) {
    for(let i=0;i<products.length;i++){
        if(products[i].id===newProduct.id){
            return "Product ID already exists";
        }

    }
    products.push(newProduct)
            return products
            
        
}

const products = [
  { id: 1, name: "Laptop", price: 900, stock: 5 },
  { id: 2, name: "Mouse", price: 30, stock: 10 }
];



const newProduct = {
  id: 2,
  name: "Keyboard",
  price: 70,
  stock: 8
};

console.log(addProduct(products,newProduct));
console.log(products)