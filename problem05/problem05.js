function sumOfSmallProducts(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j > 10) continue;
      sum += i * j;
    }
  }
  return sum;
}

module.exports = sumOfSmallProducts;