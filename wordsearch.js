const wordSearch = (letters, word) => {

    if(letters.length === 0 ){
        return false;
    }
    let newArray = [];
  
    for (let i = 0; i < letters[0].length; i++) {
       newArray.push([]);
    //    console.log(newArray);
    }
    for (let row = 0; row < letters.length; row++) {
        // console.log(letters[k]);
        for (let col = 0; col < letters[row].length; col++) {
            let newEl = letters[row][col];
            newArray[col].push(newEl);
        }
    }
    
    // console.log(newArray);
for(let i = 0; i < newArray.length; i++){
    // console.log(newArray[i]);
     const newArr = newArray[i].join("")
    //  console.log(newArr);
    if(newArr === word) {
        return true
    }
}

////////////////////////////////////////
    // console.log(letters);
    // console.log(word);
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word))
            return true
    }
    return false;
}

// console.log(wordSearch(
//     [],"name"));

 module.exports = wordSearch


console.log( wordSearch(
 [
   [1, 2, 3, 4],
   [1, 2, 3, 4],
   [1, 2, 3, 4],
   [1, 2, 3, 4]
 ]), ); 

/*
const transpose = function (matrix) {

    let newArray = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
      // console.log(newArray);
    }
  
    for (let row = 0; row < matrix.length; row++) {
      // console.log(matrix[k]);
      for (let col = 0; col < matrix[row].length; col++) {
        let newEl = matrix[row][col];
        newArray[col].push(newEl);
  
      }
    }
    return newArray;
  
  };
  */
