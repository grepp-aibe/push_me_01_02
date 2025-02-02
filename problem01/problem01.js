/* problem01.js */
/**
 * [문제1]
 * - 주어진 점수에 따라 등급(A, B, C, Invalid)을 반환하는 함수를 작성하세요.
 * - 점수가 음수이거나 100점을 초과하면 "Invalid"를 반환해야 합니다.
 * - 점수는 0 이상 100 이하인 경우만 처리하며, 모든 조건을 확인한 후 최후에 `return`을 사용해야 합니다.
 */
/* problem01.js */
function grade(score) {
  let result;

  if (score > 100 || score < 0) {
    result = "Invalid";
  } else if (score >= 90) {
    result = "A";
  } else if (score >= 85) {
    result = "B";
  } else {
    result = "C";
  }

  return result;
}
module.exports = grade;
