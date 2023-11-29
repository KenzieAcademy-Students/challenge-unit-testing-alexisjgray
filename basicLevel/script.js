const reverseString = (str) => {
  if (typeof str !== "string") {
    return null;
  } else {
    return str.split("").reverse().join("");
  }
};
console.assert(true, "this is a false expression");
console.assert(
  reverseString("hello") == "olleh",
  "reverseString should return olleh when given hello"
);
console.assert(
  reverseString(3000) == null,
  "reverseString should return null when given a number"
);
console.assert(
  reverseString([1, 2, 3]),
  "reverseString should return null when given a array of numbers"
);
console.assert(
  reverseString(["hi", "hey", "hello"]),
  "reverseString should return null when given a array of words"
);
console.assert(
  reverseString(),
  "reverseString should return null when passed nothing"
);

const reverseSentence = (str) => {
  if (typeof str !== "string") {
    return null;
  } else {
    return str.split(" ").reverse().join(" ");
  }
};
console.assert(
  reverseSentence("Hello there buddy !") === "! buddy there Hello",
  "reverseSentence should return ! buddy there Hello when given Hello there buddy !"
);
console.assert(
  reverseSentence([1, 2, 3, 4]),
  "reverseSentence should return null when given an array of numbers"
);
console.assert(
  reverseSentence(4000),
  "reverseSentence should return null when given a number"
);
console.assert(
  reverseString(["hi", "hey", "hello"]),
  "reverseSentence should return null when given an array of strings"
);
console.assert(
  reverseString(),
  "reverseSentence should return null when given nothing"
);

const minimumNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const min = Math.min(...arr);
    return min;
  }
};
console.assert(
  minimumNumber([3, 22, 333, 425]) === 3,
  "minimumNumber should return 3 when given [3, 22, 333, 425]"
);
console.assert(
  minimumNumber("hello"),
  "minimumNumber should return null when given a string"
);
console.assert(
  minimumNumber(["hi", "hey", "hello"]),
  "minimumNumber should return null when given an array of strings"
);
console.assert(
  minimumNumber(4545),
  "minimumNumber should return null when given a number"
);
console.assert(
  minimumNumber([]),
  "minimumNumber should return null when given an empty array"
);
console.assert(
  minimumNumber(),
  "minimumNumber should return null when given nothing"
);

const maximumNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const max = Math.max(...arr);
    return max;
  }
};
console.assert(
  maximumNumber([3, 22, 333, 425]) === 425,
  "maximumNumber should return 425 when given [3, 22, 333, 425]"
);
console.assert(
  maximumNumber("hello"),
  "maximumNumber should return null when given a string"
);
console.assert(
  maximumNumber(["hi", "hey", "hello"]),
  "maximumNumber should return null when given an array"
);
console.assert(
  maximumNumber(4545),
  "maximumNumber should return null when given a number"
);
console.assert(
  maximumNumber([]),
  "maximumNumber should return null when given an empty array"
);
console.assert(
  maximumNumber(),
  "maximumNumber should return null when given nothing"
);

const calculateRemainder = (num1, num2) => {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return null;
  } else {
    return num1 % num2;
  }
};
console.assert(
  calculateRemainder(17, 3) === 2,
  "calculateRemainder should return 2 when given the numbers 17 and 3"
);
console.assert(
  calculateRemainder(4, 2),
  "calculateRemainder should return null when given the numbers 4 and 2"
);
console.assert(
  calculateRemainder(),
  "calculateRemainder should return null when given nothing"
);
console.assert(
  calculateRemainder("hello"),
  "calculateRemainder should return null when given the string hello"
);

const distinctNumbers = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return [...new Set(arr)];
  }
};
console.assert(
  distinctNumbers([0, 1, 1, 2, 2, 3, 4, 4, 4, 5]),
  "distinctNumbers should return [0, 1, 2, 3, 4, 5] when given [0, 1, 1, 2, 2, 3, 4, 4, 4, 5]"
);
console.assert(
  distinctNumbers([0, 1, 1, 3, 4, 3, 2, 5, 2, 0, 5]),
  "distinctNumbers should return [0,1,2,3,4,5] when given [0,1,1,3,4,3,2,5,2,0,5]"
);
console.assert(
  distinctNumbers([]),
  "distinctNumbers should return true when given empty array"
);
console.assert(
  distinctNumbers(),
  "distinctNumbers should return null when given nothing"
);
console.assert(
  distinctNumbers("Hello"),
  "distinctNumbers should return null when given a string"
);
console.assert(
  distinctNumbers(2, 2),
  "distinctNumbers should return null when given numbers"
);

const countValues = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const valueCounts = {};
  arr.forEach((value) => {
    if (valueCounts[value] === undefined) {
      valueCounts[value] = 1;
    } else {
      valueCounts[value]++;
    }
  });
  const valueString = Object.keys(valueCounts).map(
    (key) => `${key}(${valueCounts[key]})`
  );
  return valueString.join(", ");
};
console.assert(
  countValues([1, 3, 5, 3, 7, 3, 1, 1, 5]),
  "countValues should return 1(3), 3(3), 5(2), 7(1) when given the array [1, 3, 5, 3, 7, 3, 1, 1, 5]"
);
console.assert(
  countValues(1, 1, 1, 2, 2, 555, 555, 4),
  "countValues should return null when given numbers"
);
console.assert(
  countValues([]),
  "countValues should return null when given an empty array"
);
console.assert(
  countValues("Hello"),
  "countValues should return null when given a string"
);
console.assert(
  countValues(),
  "countValues should return null when given nothing"
);

const evaluateExpression = (expression, variables) => {
  if (
    typeof expression !== "string" ||
    !variables ||
    typeof variables !== "object"
  ) {
    return null;
  }
  expression = Object.keys(variables).reduce((expression, key) => {
    return expression.replace(new RegExp(key), variables[key]);
  }, expression);
  return eval(expression);
};
console.assert(
  evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 }) === -3,
  "evaluateExpression should return -3 when given a string of a + b + c - d and an object of a: 1, b: 7, c: 3, d: 14"
);
console.assert(
  evaluateExpression("h - i + c - d", { h: 10, i: 22, c: 3, d: 14 }) === -23,
  "evaluateExpression should return -23 when given a string of h - i + c - d and an object of h: 10, i: 22, c: 3, d: 14"
);
console.assert(
  evaluateExpression(" ", {}),
  "evaluateExpression should return null when given an empty string and empty object"
);
console.assert(
  evaluateExpression([1, 2, 3], { word: "Hello" }),
  "evaluateExpression should return null when given an array of numbers and an object with the word Hello"
);
console.assert(
  evaluateExpression(1, 2, 3),
  "evaluateExpression should return null when given numbers"
);
//   take a string of basic arithmetic expression
//  take a object of set variables and value pairs
// take the sting apart so you have different pieces (split)
// add or sub (whatever the expression containts) use coinditional or switch statement
//  return the result of the expression
// evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})
