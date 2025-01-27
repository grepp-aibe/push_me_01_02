/* problem05.js */
/**
 * [문제5]
 * - 1부터 N까지의 숫자 중 두 숫자를 곱한 결과가 10 이하인 경우를 모두 찾아 합산하여 반환하세요.
 * - 반드시 중첩된 `for` 루프를 활용해야 합니다.
 * - 모든 조건을 확인한 후 최후에 `return`을 사용하세요.
 */
function sumOfSmallProducts(n) {
  let sum = 0; // 합계를 0으로 초기화

  // 두 숫자의 곱을 계산하기 위해 이중 루프 사용
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 두 숫자의 곱이 10을 초과하면 건너뛰기
      if (i * j > 10) continue;

      // 두 숫자의 곱을 합산
      sum += i * j;
    }
  }

  return sum;
}
module.exports = sumOfSmallProducts;
