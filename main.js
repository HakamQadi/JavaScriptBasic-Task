//Ex.1
//cash flow ratio

var cash = 1000,
  currentLiabilitie = 500;
console.log(cash / currentLiabilitie);

console.log("*********");

// Net income
var revenues = 1000,
  expenses = 500;
console.log(revenues - expenses);

console.log("*********");

// Net income

var liabilities = 1000,
  equity = 500;
console.log(liabilities + equity);

console.log("*********");

// Net income (using profit margin and sales)

var profit = 1000,
  sales = 500;
console.log(profit * sales);

console.log("*********");

// Average

var num1 = 7,
  num2 = 9,
  num3 = 2;
console.log((num1 + num2 + num3) / 3);

console.log("*********");

// Discount

var price = 150,
  discount = 30 / 100;
console.log(150 - price * discount);

console.log("*********");

// Age limit (older than 18 and less than 30)

var age = 23;
var condition = age > 18 && age < 30;
if (condition) {
  console.log(condition);
} else {
  console.log(condition);
}

console.log("*********");

// Exponential

var num = 2,
  powNum = 3;
console.log(Math.pow(num, powNum));

console.log("*********");

// Remainder

var num1 = 10,
  num2 = 4;
console.log(num1 % num2);

// Ex.2

console.log("----------------------------------------------------");

console.log(typeof 100);
console.log(typeof 73.9);
console.log(typeof NaN);
console.log(typeof "Water");
console.log(typeof false);
console.log(typeof (9 != 11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof Infinity);
console.log(1 == "1");
console.log(1 === "1");

console.log("----------------------------------------------------");

// Ex.3

var text = "Welcome to Orange";

console.log(text.toUpperCase());

console.log("*********");

var substrTxt = text.substr(8, 2);
console.log(substrTxt.toUpperCase());

console.log("*********");

console.log(text.replace("Hello from Orange"));

console.log("*********");

console.log(text.toLowerCase);

console.log("*********");

console.log(text.length);

console.log("*********");

console.log('Welcome to "Orange"'.replace(text));

console.log("*********");

var text2 = " Jordan";
console.log(text.concat(text2));

console.log("*********");
console.log("*********");

var text3 = "cactus";
console.log(text3.charAt(0) + text3.slice(1).replace("c", "*"));
