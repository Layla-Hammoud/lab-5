const reversingArray = (array) => {
  const reversedArray = [];
//the code will loop over the array form the end to the start and push every vallue
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};
// console.log(reversingArray([1, 2, 3, 4, 5]));

const findingAverage = (array) =>{
let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum+=array[i]
  }
//to find the average we will divide the sum over array.length
  const average = sum / array.length;
  return average
}
// console.log(findingAverage([1, 2, 3, 4]));

const printingValues = (array) => {
//we will make  nested loops to access the data in the inner array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
};
// printingValues([[1,2,3],[4,5,6]])

const shiftValuesAfterN = (array,n) =>{
// we will take values after n and then unshift it to the main array
const shiftedValue = array.splice(n+1,array.length);
array.unshift(...shiftedValue)
return array
}
// console.log(shiftValuesAfterN([1,2,3,4,5],2))

const findIndex = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
};
// console.log(findIndex([10, 20, 30, 40, 50], 30));

const sortingArray = (array)=> {
    for (let i = 0; i < array.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < array.length - 1; j++) {
// Swap if the element found is greater than the next element
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
// the array is already sorted if there is not swap 
      if (!swapped) break;
    }
    return array
  }
// console.log(sortingArray([1,64, 34, 25, 12, 22, 11, 90,0]));

 const menuSystem = (array,option, number) =>{
 switch(option){
    case 1:
        array.push(number);
        console.log(array)
    break
    case 2:
        console.log(array.join(" "));
    break
    case 3:
        console.log(findIndex(array,number));
    break
    case 4:
        console.log(sortingArray(array));
    break
    case 5:
        console.log("Exit")
    break
    default:
        false
 }
 }

 //menuSystem([5,4,3,2,1],5)

