/* problem04.js */
/**
 * [문제4]
 * - 주어진 정수 N까지의 숫자를 합산하되, 10을 초과하면 합산을 중단하는 함수를 작성하세요.
 * - 반드시 `while` 루프와 `break`를 활용해야 합니다.
 * - 현재 코드는 잘못된 로직으로 인해 테스트가 실패합니다.
 */
function sumUpToTen(n) {
  let sum = 0; // 합계 초기화
  let i = 1; // 시작 숫자

  while (i <= n) {
    // 합계가 10을 초과하면 루프 중단
    if (sum + i > 10) break;

    // 숫자를 합산
    sum += i;
    i++;
  }

  return sum;
}
module.exports = sumUpToTen;
