
const squareArray = (arr) => {
  const square = arr.map((each) => (each ** 2)); // square each element

  for (let i=0; i<square.length; i++){
    for (let j=0; j<square.length; j++){
      if (square[j] > square[j+1]){
        const temp = square[j];
        square[j] = square[j+1];
        square[j+1] = temp;
      }
    }
  }
  return square
}

const arr = [-12, -8 , -7, -5, 2, 4, 5, 11, 15];
const sortedArray =  squareArray(arr);
console.log(sortedArray);