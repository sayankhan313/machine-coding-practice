function getFirstAvailableProduct(products) {
return products.find((product)=>product.stock>0)
}
