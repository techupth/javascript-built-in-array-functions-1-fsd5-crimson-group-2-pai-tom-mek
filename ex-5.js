const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let sum = students.reduce(
    (accumulator, student) => accumulator + student.score,
    0
  );
  return sum / students.length;
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));
