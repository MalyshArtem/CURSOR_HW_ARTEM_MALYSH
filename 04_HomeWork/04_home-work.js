///////////////////// Arrays /////////////////////

const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

///////////////////// TASK №1 /////////////////////

//// псевдо: створити функцію -- всередині 3 масиви -- пройтись по масиву циклом, помістивши всі жіночі імена в перший масив, чоловічі в другий. -- умова це закінчення імені -- два масив злити в один

const getPairs = function (students) {
  const pairs = [];
  const boys = [];
  const girls = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith('а')) {
      girls.push(students[i]);
      continue;   /// забезпечує перехід в циклі до наступної ітерації
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith('р') || students[i].endsWith('й')) {
      boys.push(students[i]);
      continue;
    }
  }
  for (let i = 0; i < boys.length; i++) {
    pairs.push([boys[i]].concat([girls[i]]));
  }
  return pairs;
};

const pairs = getPairs(students);

///////////////////// TASK №2 /////////////////////

//// псевдо: створити функцію -- всередині масив -- в масив помістити за індексом пари з утвореного масиву і за індексом взяти теми з масиву тем

const getThemes = (pairs, themes) => {
  const pairsThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    pairsThemes.push([[pairs[i][0]] + ' i ' + [pairs[i][1]]].concat([themes[i]]));
  }
  return pairsThemes;
};

const pairsThemes = getThemes(pairs, themes);

///////////////////// TASK №3 /////////////////////

//// псевдо: створити функцію -- всередині масив -- в масив помістити за індексом студента і за індексом взяти оцінку

const getMarksForStudents = function (students, marks) {
  const markForStudent = [];
  for (let i = 0; i < students.length; i++) {
    markForStudent.push([students[i]].concat([marks[i]]));
  }
  return markForStudent;
};

const markForStudent = getMarksForStudents(students, marks);

///////////////////// TASK №4 /////////////////////

//// псевдо: створити функцію -- всередині масив -- довжина масива три, оскільки три пари -- циклом утворити рандомні значення і записати в масив --


const getRandomMarks = (randomMarks) => {
  randomMarks = [];
  for (let i = 0; i < 3; i++) {
    randomMarks.push(parseInt(Math.ceil(Math.random() * 5)));
  }
  return randomMarks;
};

const newRandomMarks = getRandomMarks();
/// console.log(newRandomMarks);


/// псевдо: створити функцію -- всередині масив -- використати вже існуючий масив пар та тем і до нього додати нові оцінки


const getPairsRandomMarks = (pairsThemes, newRandomMarks) => {
  const PairsOfRandomMarks = [];
  for (let i = 0; i < pairsThemes.length; i++) {
    PairsOfRandomMarks.push(pairsThemes[i].concat(newRandomMarks[i]));
  }
  return PairsOfRandomMarks;
};

const resultForPairsOfRandomMarks = getPairsRandomMarks(pairsThemes, newRandomMarks);


///////////////////// outputing on the page /////////////////////

console.log(pairs);
console.log(pairsThemes);
console.log(markForStudent);
console.log(resultForPairsOfRandomMarks); 

document.writeln(`
Масив №1: ${pairs}<br>
Масив №2: ${pairsThemes}<br>
Масив №3: ${markForStudent}<br>
Масив №4: ${resultForPairsOfRandomMarks}`
);
