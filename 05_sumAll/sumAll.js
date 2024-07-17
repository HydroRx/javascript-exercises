const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else {
    let difference = Math.abs(num1 - num2) + 1;
    console.log(difference);
    let sum = 0;
    while (difference >= 0) {
      sum = sum + difference;
      difference--;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
