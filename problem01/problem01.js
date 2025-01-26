function grade(score) {
  let result;

  if (score > 100 || score < 0) {
    result = "Invalid";
  } else if (score >= 90) {
    result = "A";
  } else if (score >= 80) {
    result = "B";
  } else {
    result = "C";
  }

  return result;
}

module.exports = grade;