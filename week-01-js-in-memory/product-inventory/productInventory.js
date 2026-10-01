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

function updateProduct(products, id, updates) {
const product=products.find((product)=>product.id===id)
if(!product){
    return "Product not found"; 
}
Object.assign(product,updates)
}

function deleteProduct(products, id) {
  const updatedProducts = products.filter(
    (product) => product.id !== id
  );
  if (updatedProducts.length === products.length) {
return "product casnnot be deleted"
}
return updatedProducts

}

function addProduct(products, newProduct) {
  if (!newProduct.name.trim()) {
    return "Invalid product name";
  }

  if (newProduct.price <= 0) {
    return "Invalid product price";
  }

  if (newProduct.stock < 0) {
    return "Invalid product stock";
  }

  const duplicate = products.some(
    (product) => product.id === newProduct.id
  );

  if (duplicate) {
    return "Product with this ID already exists";
  }

  products.push(newProduct);

  return products;
}
// 1. Valid product add
console.log(
  addProduct(products, {
    id: 3,
    name: "Keyboard",
    price: 70,
    stock: 8
  })
);

// 2. Duplicate ID
console.log(
  addProduct(products, {
    id: 2,
    name: "Monitor",
    price: 200,
    stock: 5
  })
);

// 3. Find existing product
console.log(findProductById(products, 1));

// 4. Find missing product
console.log(findProductById(products, 99));

// 5. Delete missing product
console.log(deleteProduct(products, 99));






  function validateProduct(product) {
  return (
    product.name.trim() !== "" &&
    product.price > 0 &&
    product.stock >= 0
  );
}


function addProduct(products, newProduct) {
if(!validateProduct(newProduct)){
return "product does not have valid input"
}

  const duplicate = products.some(
    (product) => product.id === newProduct.id
  );

  if (duplicate) {
    return "Product with this ID already exists";
  }

  products.push(newProduct);

  return products;
}