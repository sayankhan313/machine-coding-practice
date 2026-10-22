// DSA Revision: Best Time to Buy and Sell Stock
// Pattern: Minimum So Far
// Time: O(n) | Space: O(1)

function maxProfit(prices) {
  if (prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
console.log(maxProfit([2, 4, 1]));          // 2
