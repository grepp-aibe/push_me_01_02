/* problem03.js */
/**
 * [문제3]
 * - 1부터 N까지의 숫자 중에서 3의 배수와 5의 배수를 제외한 합을 반환하는 함수를 작성하세요.
 * - 반드시 `continue`를 활용해야 합니다.
 * - 모든 조건을 확인한 후 최후에 `return`을 사용하세요.
 */
/* problem03.js */
function sumExcludingMultiplesOfThreeAndFive(n) {
  let sum = 0; // 합계는 0으로 초기화합니다.

  for (let i = 1; i <= n; i++) {
    // 3의 배수 또는 5의 배수는 건너뜁니다.
    if (i % 3 === 0 || i % 5 === 0) continue;

    // 제외되지 않는 숫자를 합산합니다.
    sum += i;
  }

  return sum;
}
module.exports = sumExcludingMultiplesOfThreeAndFive;
