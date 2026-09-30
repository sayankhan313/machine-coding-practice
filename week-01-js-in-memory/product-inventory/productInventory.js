// function addProduct(products, newProduct) {
//     for(let i=0;i<products.length;i++){
//         if(products[i].id===newProduct.id){
//             return "Product ID already exists";
//         }

//     }
//     products.push(newProduct)
//             return products
            
        
// }


// with some 
function addProduct(products, newProduct) {
   const exists =products.some((product)=>product.id===newProduct.id
   )
   if(exists){
    return "product with same id is already there"
   }
   else {
    products.push(newProduct)
   }


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


function findProductById(products, id) {
const getProduct=products.find((product)=>product.id===id)
if (getProduct){
    return getProduct
}
else{
    return "product not found"
}

}