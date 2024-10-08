// No 1
/// without sort function
function arrInfo(arr: number[]) {
  let temp: string = "";
  temp =
    "lowest : " +
    Math.min(...arr) +
    ", " +
    "highest : " +
    Math.max(...arr) +
    ", " +
    "average : " +
    arr.reduce((a, b) => a + b) / arr.length;
  return temp;
}
console.log(arrInfo([12, 5, 23, 18, 4, 45, 32]));

/// with sort function
function arrInfo2(arr: number[]) {
  const tempArr: number[] = arr.sort((a, b) => a - b);
  const lowest: number = arr[0];
  const highest: number = arr[arr.length - 1];
  const average: number = arr.reduce((a, b) => a + b) / arr.length;
  return { lowest: lowest, highest: highest, average: average }; // untuk object jika key dan value nya sama bisa langsung {lowest, highest, average}
}
console.log(arrInfo2([12, 5, 23, 18, 4, 45, 32]));

// No 2
function arrToString(arr: string[]) {
  const tempArray: string[] = [];

  for (let i = 0; i < arr.length; i++)
    if (arr[i] === arr[arr.length - 1]) {
      tempArray.push("and " + array[i]);
    } else [tempArray.push(array[i] + ", ")];
  return tempArray.join("");
}
const array: string[] = ["apple", "banana", "cherry", "date", "leaf"];
console.log(arrToString(array));

// No 3
function secondToSmallest(numbers: number[]) {
  const smallest: number = Math.min(...numbers);
  const sortArr: number[] = numbers.sort((a, b) => a - b);
  const output = sortArr.find((number) => number > smallest);
  return output;
}
console.log(secondToSmallest([5, 3, 1, 7, 2, 6]));

// No 4
function arrAddition(arr: number[], arr2: number[]) {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i] + arr2[i];
    result.push(sum);
  }
  return result;
}
const arr: number[] = [1, 2, 3];
const arr2: number[] = [3, 2, 1];
console.log(arrAddition(arr, arr2)); // 2 arrays with same length

// No 5
function addElement(arr1: number[], newElement: number) {
  let res: number[] = [];
  if (arr1.includes(newElement)) {
    res = [...arr1];
    return res;
  } else {
    res = [...arr1, newElement];
    return res;
  }
}

const arr1: number[] = [1, 2, 3, 4];
const newElement: number = 5;
console.log(addElement(arr1, newElement));

// No 6
function sumArray(arr2: any[]) {
  let sum: number = 0;
  for (let i = 0; i <= arr2.length; i++)
    if (typeof arr2[i] === "number") {
      sum += arr2[i];
    }
  return sum;

  //bisa juga pakai forEach
  // arr2.forEach ((value) =>
  // if(typeof value ==="number")
  // total += value
  //})
  // return total
}
console.log(sumArray(["3", 1, "string", null, false, undefined, 2]));

// No 7
function makeArray(integers: string, maxSize: number) {
  let tempArr: string[] = integers.split(",");
  let output: number[] = [];
  for (let i = 0; i < tempArr.length; i++)
    if (i < maxSize) {
      output.push(parseInt(tempArr[i]));
    }
  return output;
}

const integers: string = "5, 10, 24, 3, 6, 7, 8";
const maxSize: number = 5;
console.log(makeArray(integers, maxSize));

// No 8
function combineArray(arr1: number[], arr2: number[]) {
  const mergeArr: number[] = [...arr1, ...arr2];
  return mergeArr.sort((a, b) => a - b);
}
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
console.log(combineArray(array1, array2));

// No 9
function findDuplicates(arr: number[]) {
  let temp: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (!temp.includes(arr[i])) {
          temp.push(arr[i]);
        }
      }
    }
  }
  return temp;
}
const array3: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(array3));

// No 10
function diffValue(arr1: number[], arr2: number[]) {
  const diff1: number[] = arr1.filter((element) => !arr2.includes(element));
  const diff2: number[] = arr2.filter((element) => !arr1.includes(element));
  const result: number[] = [...diff1, ...diff2];
  return result;
}
const array4: number[] = [1, 2, 3, 4, 5];
const array5: number[] = [3, 4, 5, 6, 7];
console.log(diffValue(array4, array5));

// No 11
function primData(arr: any[]) {
  let arrTemp: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arrTemp.push(arr[i]);
    } else if (typeof arr[i] === "string") {
      arrTemp.push(arr[i]);
    } else if (typeof arr[i] === "boolean") {
      arrTemp.push(arr[i]);
    } else if (typeof arr[i] === "undefined") {
      arrTemp.push(arr[i]);
    } else if (arr[i] === null) {
      arrTemp.push(arr[i]);
    }
  }
  return arrTemp;
}
const randomArr: any[] = [1, [], undefined, {}, "string", {}, []];
console.log(primData(randomArr));

// No 12
function sumDuplicates(arr: number[]) {
  const duplicates = arr.filter(
    (unique) => arr.indexOf(unique) !== arr.lastIndexOf(unique)
  );
  return duplicates.reduce((a, b) => a + b);
}
const arr3: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumDuplicates(arr3));

// No 13
const winOver = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// computer choices
const compChoices: string[] = Object.keys(winOver);

function compPicks() {
  let randomChoice: number = Math.floor(Math.random() * compChoices.length);
  return compChoices[randomChoice];
}

function startRound(playerPicks: string, botPicks: string) {
  if (playerPicks === botPicks) {
    return "Tie";
  } else if (winOver[playerPicks] === botPicks) {
    return "You Won! 🏆";
  } else {
    return "You Lost 😜";
  }
}

const playerPicks: string = "paper";
const botPicks: string = compPicks();
const res: string = startRound(playerPicks, botPicks);
console.log(`${res} (${playerPicks} vs ${botPicks})`);
