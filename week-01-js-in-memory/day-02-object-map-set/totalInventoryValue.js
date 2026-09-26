function calculateTotalPrice(products) {
const total= products.reduce((acc,current)=>{
 return current.price + acc
},0)

return total
}