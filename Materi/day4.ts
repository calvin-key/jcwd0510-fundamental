////////// ARRAY ////////////

// const arr = []; // cara 1
// const arr2 = new Array(); // cara 2 <- ga pernah dipakai

const arr: string[] = ["A", "B", "C"]; // cara 1
const arr2 = new Array("A", "B", "C"); // cara 2

const arr3: number[] = [1, 2, 3, 4]; // cara 1
const arr4: number[] = new Array(1, 2, 3, 4); // cara 2

// array of object
// const students:{name: string; email: string}[] = [
//     {name: "budi", email: "budi@mail.com"},
//     {name: "siti", email: "siti@mail.com"},
//     {name: "joko", email: "joko@mail.com"}
// ];

// interface -> penulisan interface harus PascalCase dan Singular
interface Student {
  name: string;
  email: string;
  hobby?: string; //? -> menandakan bahwa key tersebut optional
  address?: Address; // -> menambahkan object di dalam object dengan interface lagi
}

interface Address {
  street: string;
  city: string;
}

// selain interface ada juga type
// type Student = {
// name: string;
// email: string;
//}

const students: Student[] = [
  { name: "budi", email: "budi@mail.com", hobby: "Futsal" },
  {
    name: "siti",
    email: "siti@mail.com",
    address: {
      street: "sesame st",
      city: "Middle of Nowehere",
    },
  },
  { name: "joko", email: "joko@mail.com" },
];

////////// FOR OF ////////////
const fruits: string[] = ["Apple", "Banana", "Orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];
let total: number = 0;

for (const number of numbers) {
  total += number;
}
console.log(total);

////////// FUNCTION ////////////
// Ada 2 cara untuk menuliskan fungsi
// 1. function declaration
function square(number: number) {
  return number * number;
}

console.log(square(4));
console.log(square(10));

// 2. function expression
const square1 = function (number: number) {
  return number * number;
};

const result3 = square1(4);
const result4 = square1(10);

console.log(result3);
console.log(result4);

////////// FUNCTION SCOPE ////////////
// variable yang di define di dalam function hanya bisa diakses di dalam function tersebut :

// function greeting() {
//     const hello = "Hello";
//     console.log(hello);   // ini bisa muncul
//     return hello;
// }
// console.log(hello); ini tidak bisa muncul
// greeting();   // jangan lupa ini agar functionnya jalan

////////// PARAMETER & ARGUMEN ////////////
// parameter -> variable yang mewakili value dari argument yang dimasukkan
// argumen -> value yang dimasukkan saat pemanggilan function

//       parameter 👇
function greeting(name: string) {
  const hello = "Hello";
  return hello + " " + name;
}

//            argument 👇
console.log(greeting("Budi"));
console.log(greeting("its me.."));

////////// PARAMETER & ARGUMEN ////////////

function multiply(a: number, b: number = 1) {
  console.log(a);
  console.log(b);
  return a * b;
}

console.log(multiply(5, 7));
console.log(multiply(5));

////////// REST PARAMETER ////////////
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

////////// NESTED FUNCTION ////////////
// function yang berada di dalam function
// inner function bisa akses parameter dari outer function
// outer function tidak bisa akses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  function sayHello() {
    return "Hello " + firstName + ",";
  }
  function welcomeMessage() {
    return "Welcome to Purwadhika!";
  }
  return sayHello() + " " + welcomeMessage();
}
console.log(getMessage("Anton"));

////////// CLOSURE ////////////
// inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setelah function tsb direturn

function greeting1(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

console.log(greeting1("Budi")());

const result5 = greeting1("Budi");
// bisa juga dengan mendeklarasikan variabel baru sehingga log nya:
console.log(result5());

////////// RECURSIVE ////////////
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

////////// ARROW FUNCTION ////////////
// shortcut untuk menuliskan function expression

// contoh function expression
const square2 = function (number: number) {
  return number * number;
};

// contoh jika diubah ke arrow function
const square3 = (number: number) => {
  return number * number;
};

// jika hanya 1 line bisa dibuat seperti ini (tanpa {} dan return):
const square4 = (number: number) => number * number;

////////// ARRAY BUILT-IN METHOD ////////////
// JOIN -> menggabungkan value yang ada di dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan isi value paling akhir dalam array
const words2: string[] = ["hello", "world", "of Warcraft"];
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling dapan dalam array
const words3: string[] = ["I", "love", "you"];
words3.shift();
console.log(words3);

// PUSH -> menambahkan value ke dalam array di paling akhir
const words4: string[] = ["I", "love", "you"];
words4.push("too");
console.log(words4);

// UNSHIFT -> (kebalikan push) menambahkan value ke urutan paling depan array
const words5: string[] = ["I", "love", "you"];
words5.unshift("yes");
console.log(words5);

// CONCAT -> menggabungkan 2 array menjadi 1 array
const arr5: string[] = ["shut"];
const arr6: string[] = ["up"];
const arr7: string[] = ["just", "kidding"];
console.log(arr5.concat(arr6).concat(arr7));

//// bisa juga:
const mergeArr = [...arr5, ...arr6, ...arr7];
console.log(mergeArr);

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb");
console.log(months);

months.splice(4, 1);
console.log(months);

months.splice(3, 1, "may");
console.log(months);

// SLICE -> mereturn array baru dengan value yang sudah ditentukan index start dan index end dari array tsb
// rumus: slice(startIndex, endIndex)

const fruits1: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
console.log(fruits1.slice(1, 4)); // dari depan
console.log(fruits1.slice(-4, -1)); // dari belakang

// INDEXOF -> mencari index dari value yang kita search
// kalau tidak ditemukan maka akan me-return -1

const fruits2: string[] = ["Apple", "Banana", "Orange", "Lemon", "Mango"];
console.log(fruits2.indexOf("Lemon"));

// SORT -> mengurutkan isi array berupa string atau number
//// versi string
const fruits3: string[] = ["Mango", "Apple", "Orange", "Lemon", "Banana"];
fruits3.sort();
console.log(fruits3);

//// versi number tanpa compare function (hanya berlaku untuk 1 digit)
const points: number[] = [3, 5, 1, 9, 6, 2];
points.sort();
console.log(points);

//// versi number dengan compare function
const points2: number[] = [3, 50, 1, 9, 6, 2];
points2.sort((a, b) => a - b); // ascend (kecil ke besar)
////// points2.sort((a, b) => b - a); // descend (besar ke kecil)
console.log(points2);

// REVERSE -> membalikkan urutan element dalam array
const points3: number[] = [1, 2, 3, 4, 5];
points3.reverse();
console.log(points3);

// FOREACH -> melakukan untuk looping pada array tapi tidak me-return apapun
const fruits4: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

const result6 = fruits4.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

// MAP -> melakukan looping sama kaya forEach tapi mereturn array baru
const fruits5: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

const result7 = fruits5.map((fruit) => {
  return fruit;
});

console.log(result7);

// FILTER -> melakukan looping sama kaya map dan menghasilkan array baru berdasarkan kondisi pada return function

const ages: number[] = [32, 15, 29, 21, 40];
const result8 = ages.filter((age) => {
  return age > 17;
});

console.log(result8);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [3, 15, 29, 15, 40];

const result9 = ages2.find((age) => age > 14);

console.log(result9);

//FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah index
const ages3: number[] = [3, 15, 29, 15, 40];

const result10 = ages3.findIndex((age) => age > 14);

console.log(result10);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array

const numbers1: number[] = [175, 50, 25];

const result11 = numbers1.reduce((a, b) => a + b);

console.log(result11);

// INCLUDES -> mengecek value pada array ada apa tidak.
// Hasil returnya berupa boolean (jika ada hasilnya true, tidak ada hasilnya false)

const fruits6: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

console.log(fruits6.includes("Apple"));
