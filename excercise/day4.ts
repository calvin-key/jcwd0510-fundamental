// No 1
function triangle(height: number) {
  let next: number = 1;

  for (let i = 1; i <= height; i++) {
    let output: string = "";
    for (let j = 1; j <= i; j++) {
      if (next >= 10) {
        output += `${next} `;
      } else {
        output += `0${next} `;
      }
      next++;
    }
    console.log(output);
  }
}
triangle(4);

// No 2
function fizzBuzz(n: number) {
  let numbers: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      numbers.push("FizzBuzz");
    } else if (i % 5 === 0) {
      numbers.push("Buzz");
    } else if (i % 3 === 0) {
      numbers.push("Fizz");
    } else numbers.push(i.toString());
  }
  return numbers.join(", ");
}
console.log(fizzBuzz(15));

// No 3
function bmi(weight: number, height: number) {
  const bmi: number = weight / height ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi <= 24.9) {
    return "Ideal";
  } else if (bmi <= 29.9) {
    return "Overweight";
  } else if (bmi <= 39.9) {
    return "Very Overweight";
  } else {
    return "Obesity";
  }
}
console.log(bmi(70, 1.7));

// No 4
function evenNumber(n: number) {
  let numbers: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      numbers.push(i);
    } else {
      numbers.push();
    }
  }
  return numbers;
}
console.log(evenNumber(10));

function evenNumber2(n: number[]) {
  let numbers: number[] = [];
  for (let i = 2; i <= n.length; i++) {
    if (i % 2 === 0) {
      numbers.push(i);
    } else {
      numbers.push();
    }
  }
  return numbers;
}
console.log(evenNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// No 5
function stringToArray(string: string) {
  return string.split(" ");
}
console.log(stringToArray("Hello World"));
