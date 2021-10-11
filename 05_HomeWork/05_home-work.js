///// TASK 1 /////

const getRandomArray = (length, min, max) => {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    randomArray.push(randomNumber);
  }
  return randomArray;
};

///// TASK 3 /////

const getAverage = (...numbers) => {
  const arr = numbers.filter((number) => Number.isInteger(number)); /// запишемо в масив цілі числа
  //console.log('масив - ' + arr)
  const sumAllNumbers = arr.reduce((sum, nextNumber) => sum + nextNumber); /// сума всіх чисел
  //console.log('сума всіх - ' + sumAllNumbers);
  const averageNumber = +(sumAllNumbers / arr.length); ///
  return averageNumber;
};

///// TASK 4 /////
const getMedian = (...numbers) => {
  const arrayOfAnyNumbers = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
  // console.log('такий масив - ' + arrayOfAnyNumbers);
  // якщо парна кількість елементів
  if (arrayOfAnyNumbers.length % 2) {
    return arrayOfAnyNumbers[Math.floor(arrayOfAnyNumbers.length / 2)];
  // якщо непарна кількість елементів
  } else {
    return (arrayOfAnyNumbers[arrayOfAnyNumbers.length / 2] + arrayOfAnyNumbers[arrayOfAnyNumbers.length / 2 - 1]) / 2;
  }
};

///// TASK 5 /////
const filterEvenNumbers = (...numbers) => numbers.filter((number) => number % 2);

///// TASK 6 /////
const countPositiveNumber = (...numbers) => numbers.filter((number) => number > 0).length;

///// TASK 7 /////
const getDividedByFive = (...numbers) => numbers.filter((number) => number % 5 === 0);

console.log(getRandomArray(15, 5, 28));

console.log(getAverage(1, 12, 33.44, 58, 10, 144, 1.323, 2.55));

console.log(getMedian(2, 8, 5, 5.5, 8, 7.8, 10));

console.log(filterEvenNumbers(144, 222, 345, 477, 505, 602, 701));

console.log(countPositiveNumber(-11, -12, 46, -91, 101, 32, 64, -77));

console.log(getDividedByFive(20, 30, 48, 405, 55, 603, 12, 202));

document.writeln(`
Результат по створенню масива: ${getRandomArray(15, 5, 28)}<br>
Результат середнього арифметичного: ${getAverage(1, 12, 33.44, 58, 10, 144, 1.323, 2.55)}<br>
Результат медіани: ${getMedian(2, 8, 5, 5.5, 8, 7.8, 10)}<br>
Результат фільтрування парних (залишаються непарні): ${filterEvenNumbers(144, 222, 345, 477, 505, 602, 701)}<br>
Результат фільтрвання чисел більших за нуль (їх кількість): ${countPositiveNumber(-11, -12, 46, -91, 101, 32, 64, -77)}<br>
Результат фільтрування чисел, які діляться на п'ять: ${getDividedByFive(20, 30, 48, 405, 55, 603, 12, 202)}`);
