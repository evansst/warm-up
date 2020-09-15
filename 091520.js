const array = [1,2,3,4,5,6,7]

const map = (array, callback) => {
  const returnArray = [];
  for(let element of array) {
    returnArray.push(callback(element))
  }
  return returnArray;
}


const timesTwo = (element) => {
  return element * 2;
}

console.log(array.map(el => timesTwo(el)))
console.log(map(array, timesTwo))