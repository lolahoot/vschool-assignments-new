array = ["this", "array", "has", "words", "in", "it"]

newArr = []
function combined(arr){
  for(let i = 0; i < arr.length - 2; i++) {
    newArr[i] = arr[i].length + arr[i+1].length + arr[i+2].length;
  }
  let index = newArr.indexOf(Math.max(...newArr));
  (arr.length < 3) ? console.log(arr) : console.log([arr[index], arr[index+1], arr[index+2]])
}



combined(array);

const inputArray = ["this", "is", "an", "array", "s", "s", "s", "sssssssssssssssssssssssssssssss"]

function longest(arr) {
    let beginIndex = 0;
    let longestLength = arr.slice(0,3).join("").length;
    let currLength;
    for (let i = 1; i < arr.length - 2; i++) {
        currLength = arr.slice(i,i+3).join("").length;
        if (currLength > longestLength) {
            beginIndex = i;
            longestLength = currLength;
        }
    }
    return arr.slice(beginIndex, beginIndex + 3);
}

console.log(longest(inputArray))
