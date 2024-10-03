// No 1
const Length: number = 5; // don't forget to use camelCase
const width: number = 3;
const result: number = (Length * width);
console.log("Area = " + result);

// No 2
const perimeter: number = 2 * (Length + width);
console.log( "Perimeter = " + perimeter );

// No 3
const radius: number = 5;
const diameter: number = radius * 2;
const circumference: number = 2 * (22 / 7) * radius;
const area: number = (22 / 7) * (radius ** 2);
console.log("Diameter = " + diameter + ", circumference = " + circumference + ", area = " + area);

// No 4
const a: number = 80;
const b: number = 65;
const result4: number = (180 - (a + b)); // it would be better if the name is c to make it consistent
console.log("angle = " + result4);

// No 5
const x: number = 400; // change that "x" name, it's so disgustingly incosistent
const year: number = Math.floor(x / 365);
const month: number = (Math.floor((x / 30) - 12)); // can also be (x % 365)/30
const days: number = ((x % 365) % 30);
console.log(year + " year, " + month + " month, " + days + " days");
console.log(`${year} year, ${month} month, ${days} days`); // template literals

const y: number = 366;
const year2: number = Math.floor(y / 365);
const month2: number = (Math.floor((y / 30) - 12));
const days2: number = ((y % 365) % 30);
console.log(year2 + " year, " + month2 + " month, " + days2 + " days");

// No 6
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-01-22");
const diffinms:number = Math.abs(date2.getTime() - date1.getTime()); // use camelCase
const diffindays:number = Math.floor(diffinms / (1000 * 60 * 60 * 24));
console.log("Difference in days = " + diffindays);
