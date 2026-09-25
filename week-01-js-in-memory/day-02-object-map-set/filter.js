function getAffordableProducts(products) {

    let affordableproducts= products.filter((items)=>{
       return  items.price <100
    })

    return affordableproducts

}