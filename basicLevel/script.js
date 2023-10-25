const reverseString = (str) => {
  if (typeof str !== "string") {
    return null;
  } else {
    return str.split("").reverse().join("");
  }
};
console.assert(reverseString("hello"));
console.assert(reverseString(3000));
console.assert(reverseString([1, 2, 3]));
console.assert(reverseString(["hi", "hey", "hello"]));
console.assert(reverseString());

const reverseSentence = (str) => {
  if (typeof str !== "string") {
    return null;
  } else {
    return str.split(" ").reverse().join(" ");
  }
};
console.assert(reverseSentence("Hello there buddy !"));
console.assert(reverseSentence([1, 2, 3, 4]));
console.assert(reverseSentence(4000));
console.assert(reverseString(["hi", "hey", "hello"]));
console.assert(reverseString());

const minimumNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const min = Math.min(...arr);
    return min;
  }
};
console.assert(minimumNumber([3, 22, 333, 425]));
console.assert(minimumNumber("hello"));
console.assert(minimumNumber(["hi", "hey", "hello"]));
console.assert(minimumNumber(4545));
console.assert(minimumNumber([]));
console.assert(minimumNumber());

const maximumNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const max = Math.max(...arr);
    return max;
  }
};
console.assert(maximumNumber([3, 22, 333, 425]));
console.assert(maximumNumber("hello"));
console.assert(maximumNumber(["hi", "hey", "hello"]));
console.assert(maximumNumber(4545));
console.assert(maximumNumber([]));
console.assert(maximumNumber());

const calculateRemainder = (num1, num2) => {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return null;
  } else {
    return num1 % num2;
  }
};
console.assert(calculateRemainder(17, 3));
console.assert(calculateRemainder(4, 2));
console.assert(calculateRemainder());
console.assert(calculateRemainder("hello"));

const distinctNumbers = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return [...new Set(arr)];
  }
};
console.assert(distinctNumbers([0, 1, 1, 2, 2, 3, 4, 4, 4, 5]));
console.assert(distinctNumbers([0, 1, 1, 3, 4, 3, 2, 5, 2, 0, 5]));
console.assert(distinctNumbers([]));
console.assert(distinctNumbers());
console.assert(distinctNumbers("Hello"));
console.assert(distinctNumbers(2, 2));
