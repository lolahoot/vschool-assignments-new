const array = [1,2,9,7,5,3];
target = 5

function twoSum(arr, sum){
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++){
      if (arr[j]  + arr[i] === sum) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum(array, target));
