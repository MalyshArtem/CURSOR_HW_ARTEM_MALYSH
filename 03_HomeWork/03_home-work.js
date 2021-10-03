///////////////////// TASK №1 /////////////////////

function getMaxDigit(numeric) {
  const numbers = numeric.toString().split('').map(Number);
  return Math.max(...numbers);
};

///////////////////// TASK №2 /////////////////////

function getPower(number, power) {
  let result = number;
  for (i = 1; i < power; i++) {
    result *= number;
  }
  return result;
};

///////////////////// TASK №3 /////////////////////

const correctName = (name) => name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();

///////////////////// TASK №4 /////////////////////

const getResultAfterTaxation = (money) => {
  return money - money * (19.5 / 100);
};

///////////////////// TASK №5 /////////////////////

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min));
};

////  максимум не включається, мінімум включається

///////////////////// TASK №6 /////////////////////

const countLetter = (letter, word) => {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) {
      result++;
    }
  }
  return result;
};

///////////////////// outputing on the page /////////////////////

document.writeln(`
Функція №1: ${getMaxDigit(1234560987654321)}<br>
Функція №2: ${getPower(2, 8)}<br>
Функція №3: ${correctName('aRtemIy')}<br>
Функція №4: ${getResultAfterTaxation(1000)}<br>
Функція №5: ${getRandomNumber(1, 144)}<br>
Функція №6: ${countLetter('R', 'RememberRememberRememberRemember')}`);
