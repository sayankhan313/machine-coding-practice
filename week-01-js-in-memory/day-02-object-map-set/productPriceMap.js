function createProductPriceMap(products) {
  const priceMap = new Map();

  for (let i = 0; i < products.length; i++) {
    priceMap.set(products[i].name, products[i].price);
  }

  return priceMap;
}