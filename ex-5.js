const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let totalSum = students.reduce( (accumulator, student) =>
   accumulator + student.score  
   , 0
  ); 
  return totalSum / students.length;
}

let result = getAverageStudentScore(students); // Output: 87.5
console.log(result)