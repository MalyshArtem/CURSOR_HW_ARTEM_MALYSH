let chyslo_N;
let chyslo_M;

//////////////// отримати число N ////////////////
do {
  chyslo_N = +prompt('Введіть будь ласка перше ціле число', '');
} while (!Number.isInteger(chyslo_N));

console.log(chyslo_N);

//////////////// отримати число M ////////////////
do {
  chyslo_M = +prompt('Введіть будь ласка друге ціле число', '');
} while (!Number.isInteger(chyslo_M));

console.log(chyslo_M);


//////////////// булевий параметр ////////////////

const countUsiParni = confirm('Чи потрібно пропустити при підрахунку суми парні числа?');


let sumaUsih_N_M = 0;
for (let i = chyslo_N; i <= chyslo_M; i++) {
  if (countUsiParni === true) {
    if (i % 2 !== 0) {
      sumaUsih_N_M += i;
    }
  } else {
    sumaUsih_N_M += i;
  }
}

alert(`Сума всіх чисел від ${chyslo_N} та до ${chyslo_M} : ${sumaUsih_N_M}`);

console.log(`Сума всіх чисел від ${chyslo_N} та до ${chyslo_M} : ${sumaUsih_N_M}`);
