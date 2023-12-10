let words = ["hello", "world"];

function getWordLengths(words) {
  let numberWords = words.map( (item) => {
    return item.length;
  });
  return numberWords;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
