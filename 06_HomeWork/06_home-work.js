const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];


///// TASK 1 /////

const getSubjects = (students) => {
  const allSubjects = Object.keys(students.subjects);
  // console.log('allSubjects - ', allSubjects);
  const listSubjects = allSubjects.map((subject) => (subject.slice(0, 1).toUpperCase() + subject.slice(1).toLowerCase()).split('_').join(' '));

  return listSubjects;
}


///// TASK 2 /////

const getAverageMark = (students) => {
  const marksSubject = Object.values(students.subjects);
  // console.log('marksSubject - ', marksSubject);
  const getMark = marksSubject[0].concat(marksSubject[1], marksSubject[2]);
  // console.log('getMark - ', getMark);

  const averageMark = (getMark.reduce((sum, mark) => sum + mark) / getMark.length).toFixed(2);
  // console.log('averageMark - ', getMark);

  return averageMark;
}


///// TASK 3 /////

const getStudentInfo = (students) => {
  return {
  course: students.course,
  name: students.name,
  averageMark: getAverageMark(students)
  }
}


///// TASK 4 /////

const getStudentsNames = (students) => students.map(student => student.name).sort();

///// TASK 5 /////

const getBestStudent = (students) => students.reduce((student1, student2) => getAverageMark(student1) > getAverageMark(student2) ? student1 : student2).name;


///// TASK 6 /////

const calculateWordLetters = (word) => {
  const result = {};
  const arrWordLowerCased = word.toLowerCase().split('');
  // console.log(arrWordLowerCased);
  arrWordLowerCased.map((item) => (!result[item] ? (result[item] = 1) : result[item]++));

  return result;
}

console.log('?????????????? 1:', getSubjects(students[1]));
console.log('?????????????? 2:', getAverageMark(students[1]));
console.log('?????????????? 3:', getStudentInfo(students[2]));
console.log('?????????????? 4:', getStudentsNames(students));
console.log('?????????????? 5:', getBestStudent(students));
console.log('?????????????? 6:', calculateWordLetters("??????????"));



/*document.writeln(`
?????????????? 1: ${getSubjects(students[0])}<br>
?????????????? 2: ${getAverageMark(students[0])}<br>
?????????????? 3: ???????????? ??????????????<br>
?????????????? 4: ${getStudentsNames(students)}<br>
?????????????? 5: ${getBestStudent(students)}<br>
?????????????? 6: ???????????? ??????????????
`);*/
