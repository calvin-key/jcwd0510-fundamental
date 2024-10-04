// No 1
const num: number = 9;

for (let i = 1; i <= 10; i++) {
  const res: number = num * i;
  console.log(`${num} x ${i} = ${res}`);
}

// No 2
const original: string = "madam";
const reversed: string = original.split("").reverse().join("");

if (original === reversed) {
  console.log("palindrome");
} else {
  console.log("not a palindrome");
}

// No 3
const from: number = 100_000;
const to: number = from / 100_000;
console.log(`${to} km`);

// No 4
const num1: number = 1000;
let curr: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format(num1);
console.log(curr);

// No 5
const string: string = "Hello World";
const searchString: string = "ell";
console.log(string.replace(searchString, ""));

// No 6
const str: string = "hello world";
const cap: string[] = str.split(" ");

for (let i = 0; i < cap.length; i++) {
  cap[i] = cap[i][0].toUpperCase() + cap[i].slice(1);
}
console.log(cap.join(" "));

//No 7
const normal: string = "The QuiCk BrOwN Fox"; 
let swapCase: string = "";

for (let i = 0; i < normal.length; i++) {
  if (normal[i] === normal[i].toUpperCase()) {
    swapCase += normal[i].toLowerCase();
  } else {
    swapCase += normal[i].toUpperCase();
  }
}
console.log(swapCase);

//No 8
const a1: number = 5;
const a2: number = 5;

if (a1 > a2) {
  console.log(a1);
} else if (a1 === a2) {
  console.log("equal numbers");
} else {
  console.log(a2);
}

//No 9
const b1: number = 42;
const b2: number = 27;
const b3: number = 18;
const reorder: number[] = [b1, b2, b3];
console.log(reorder.sort().join(", "));

//No 10
const inputData: any = "Hello World";

if (typeof inputData === "string") {
  console.log(1);
} else if (typeof inputData === "number") {
  console.log(2);
} else {
  console.log(3);
}

//No 11
const input: string = "An apple a day keeps a doctor away";
console.log(input.replaceAll("A", "a").replaceAll("a", "*"));
