// versi JS
// const message = "Hello World";

// versi TS
const message: string = "Hello World";

// ==================== String Built in Method ===========================

const nama: string = "Siti Khodijah";
const nama2: string = " Metal";
const nama3: string = "Banget";

console.log(nama.toLowerCase()); // cara langsung
console.log(nama.toUpperCase()); // cara langsung
console.log(nama.replace("S", "O")); // cara langsung
console.log(nama.replaceAll("i", "o")); // cara langsung
console.log(nama.split("")); // cara langsung
console.log(nama.split(" "));
console.log(nama.concat(nama2).concat(nama3));
console.log (nama.slice(1, 3))

const nama1: string = nama.toLowerCase();
console.log(nama1); // cara ditampung dulu di variable

// ===================== TEMPLATE LITERALS / TEMPLATE STRING ==============

const nama4: string = "Jack";
const message1: string = `Welcome ${nama4}`;

console.log(message1);

console.log("Welcome" + " " + nama4); // cara manual

// ===================== NUMBER BUILT-IN METHOD ===========================
const angka: string = "2000";
console.log(typeof Number(angka)); // typeof untuk cek tipe data
console.log(typeof angka);
console.log(typeof parseInt(angka)); // cara lain untuk mengubah tipe data string ke number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ===================== TYPE CONVERSION =================================

// String conversion
const angka1: number = 20
console.log(String(123));
console.log(angka1.toString());

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("False"));

// ===================== DATE DATA TYPES ===========================
const now: Date = new Date();

console.log(now);

// Get Method
console.log(now.getFullYear());
console.log(now.getMonth() + 1); // ditambah 1 karena mulai dari 0
console.log(now.getDate());
console.log(now.getTime());

// Set Method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);

// ===================== BASIC OPERATOR ===========================
// + -> tambah
// - -> kurang
// * -> kali
// / -> bagi
// % -> modulo (sisa bagi)
// ** -> pangkat

const a = 20;
const b = 10;
const c = a + b;
console.log(c);

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(9 % 2);
console.log(3 ** 2);

// ===================== MODIFY IN PLACE ============================

let n: number = 4;
n += 2; // -> shortcut (berlaku juga untuk basic operator lainnya)
// n = n + 2 // -> cara panjang

console.log(n);

// ===================== INCREMENT & DECREMENT =======================
let counter: number = 2;

// counter++; // increment (+1)
counter--; // decrement (-1)

console.log(counter);

// ===================== POSTFIX & PREFIX ===========================

let counter2: number = 2;

// console.log(++counter2); // prefix (ditambah 1 dulu, hasilnya ditampilkan)
console.log(counter2++); // postfix (ditampilkan dulu, baru ditambah 1)

// ===================== COMPARISON OPERATOR ===========================

// console.log(5 == "5"); // pengecekan di valuenya saja
// console.log(5 === "5"); // pengecekan di value dan tipe data

console.log(5 > 2);
console.log(5 < 2);
console.log(5 <= 5);
console.log(5 < 5);

// ===================== MATH ===========================

// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

// Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.3));
console.log(Math.round(4.6));

// Math max -> mengembalikkan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3, 4, 5, 6));

// Math min -> mengembalikkan angka terkecil dari sekumpulan angka
console.log(Math.min(2, 3, 1, 4, 5, 6));

// Math abs -> menghilangkan tanda negatif (nilai absolut)
console.log(Math.abs(-11));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());

