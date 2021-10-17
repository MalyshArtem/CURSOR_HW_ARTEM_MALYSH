///////////////////// Arrays /////////////////////

const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
  const pairs = [];
  const boys = [];
  const girls = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith('а')) {
      girls.push(students[i]);
      continue;
    }
    boys.push(students[i]);
  }

  for (let i = 0; i < boys.length; i++) {
    pairs.push([[boys[i]], [girls[i]]]);
  }

  return pairs;
};

const pairs = getPairs(students);

const getThemes = (pairs, themes) => {
  const pairsThemes = [];

  for (let i = 0; i < pairs.length; i++) {
    pairsThemes.push([pairs[i].join(' i '), themes[i]]);
  }

  return pairsThemes;
};

const pairsThemes = getThemes(pairs, themes);

const getMarksForStudents = (students, marks) => {
  const markForStudent = [];
  
  for (let i = 0; i < students.length; i++) {
    markForStudent.push([students[i]].join(','), marks[i]);
  } 

   return markForStudent;
};

const markForStudent = getMarksForStudents(students, marks);

const getPairsRandomMarks = (pairsThemes, newRandomMarks) => {
  const pairsOfRandomMarks = [];

  for (let i = 0; i < pairsThemes.length; i++) {
    pairsOfRandomMarks.push(pairsThemes[i].concat([Math.ceil(Math.random() * 5)]));
  }

  return pairsOfRandomMarks;
};

const resultForPairsOfRandomMarks = getPairsRandomMarks(pairsThemes);

///////////////////// outputing on the page /////////////////////

console.log(pairs);
console.log(pairsThemes);
console.log(markForStudent);
console.log(resultForPairsOfRandomMarks);

document.writeln(`
Масив №1: ${pairs}<br>
Масив №2: ${pairsThemes}<br>
Масив №3: ${markForStudent}<br>
Масив №4: ${resultForPairsOfRandomMarks}`);
