let number_N;  //// перейменував англ
let number_M;

alert("Друге число повинно бути більше за перше. Тоді спрацює!!!")

//////////////// отримати число N ////////////////
do {
  number_N = +prompt('Введіть будь ласка перше ціле число', '');
} while (isNaN(number_N) || number_N % 1 !== 0 || number_N.length === '');  /// змінив умови

console.log(number_N);

//////////////// отримати число M ////////////////
do {
  number_M = +prompt('Введіть будь ласка друге ціле число', '');
} while (isNaN(number_M) || number_M % 1 !== 0 || number_M.length === '');

console.log(number_M);


//////////////// булевий параметр ////////////////

const countAllEvenNumbers = confirm('Чи потрібно пропустити при підрахунку суми парні числа?');


let sumAllNumbers_N_M = 0;

  if (number_N < number_M)
  {
    for (let i = number_N; i <= number_M; i++)
    {
      if (countAllEvenNumbers === true && i % 2 === 0)
      {
        continue;
      } else {
        sumAllNumbers_N_M += i;
      }
    }
    alert(`Сума всіх чисел від ${number_N} та до ${number_M} : ${sumAllNumbers_N_M}`);
  }
  else if (number_N > number_M) {
    alert('Ну що, спробував? Не спрацювало!?');
  }

console.log(`Сума всіх чисел від ${number_N} та до ${number_M} : ${sumAllNumbers_N_M}`);
