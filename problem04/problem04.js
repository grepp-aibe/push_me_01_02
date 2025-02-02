/* problem04.js */
/**
 * [문제4]
 * - 주어진 정수 N까지의 숫자를 합산하되, 10을 초과하면 합산을 중단하는 함수를 작성하세요.
 * - 반드시 `while` 루프와 `break`를 활용해야 합니다.
 * - 현재 코드는 잘못된 로직으로 인해 테스트가 실패합니다.
 */
function sumUpToTen(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    if (i > 10) break;
    sum += i;
    i++;
  }

  return sum;
}
module.exports = sumUpToTen;
