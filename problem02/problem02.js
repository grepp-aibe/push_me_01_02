function checkNumber(num) {
  let result;

  switch (true) {
    case typeof num !== "number" || isNaN(num):
      result = "숫자가 아닙니다.";
      break;
    case num > 0:
      result = "양수입니다.";
      break;
    case num < 0:
      result = "음수입니다.";
      break;
    case num === 0:
      result = "0입니다.";
      break;
    default:
      result = "알 수 없는 오류입니다.";
  }

  return result;
}

module.exports = checkNumber;