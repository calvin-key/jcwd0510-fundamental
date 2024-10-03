// No 1
const number: number = 25;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// No 2
const number1: number = 7;
let isPrime: boolean = true;

if (number1 === 1) {
  console.log("1 is not a prime number");
} else if (number1 > 1) {
  for (let i = 2; i <= number / 2; i++) {
    if (number1 % i == 0) {isPrime = false;
    break;}
  }
  if (isPrime) {
    console.log(`${number1} is a prime number`);
  } else {
    console.log(`${number1} is not a prime number`);
  }
} else {
  console.log(`${number1} is not a prime number`);
}

//No 3
const N: number = 5;
let sum : number = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log(sum);

//No 4
const number2: number = 4
if (number < 0) {
    console.log("Factorial for negative number can not be performed");
} else if (number === 0) {
    console.log(`The factorial of 0 is 1`);
} else {
    let fact: number = 1;
    for (let i = 1; i <= number2; i++) {
        fact *= i;
    }
    console.log(fact);
}

//No 5
const N2: number = 15;
let n1 : number = 0;
let n2 : number = 1;
let nextTerm : number;

for (let i = 1; i <= N2; i++) {
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm
}
 let sum2 : number = 0
 for (let i = 0; i < n1; i++) {
  sum += i;
 }
console.log(n1);
console.log(n1);




