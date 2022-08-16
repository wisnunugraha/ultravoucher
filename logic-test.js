let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
let result = {};
let response = [];
console.log('Data :', words);
console.log("Process...")
for (let word of words) {
    // Sorting word from a-z
    let sorting = word.split("").sort().join("");
    //check if sorting exist 
    if (result[sorting]) {
      result[sorting].push(word);
    } else {
      // put sorting to result if sorting same
      result[sorting] = [word];
      // put sorting data into response
      response.push(result[sorting])
    }
  }
console.log("Finish...")
console.log(response)