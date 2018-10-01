
/*a fucntion that takes an array of groups of four numbers and finds the largest number in each group. 
returns a new array with the largest number in each group

*/

function largestOfFour(arr) {
  let fourlargest = [];
  for (let i = 0; i < 4; i++){
    let largestinsubarray = -Infinity;
    for (let j = 0; j < arr[i].length; j++){
      
      if (arr[i][j] > largestinsubarray){
        largestinsubarray = arr[i][j];
      }
      
    }
    fourlargest.push(largestinsubarray);
  }
  return fourlargest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

