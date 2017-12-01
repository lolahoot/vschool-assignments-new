// const arr = [1,2,"3"];

function every(arr, fun){
  for (let i = 0; i < arr.length; i++) {
    if(fun(arr[i])) {
      return false
    };
  };
    return true;
}

function checkTrue(number){
  return typeof number === "number"
}

function some(arr, fun){
  for(let i = 0; i = arr.length; i++) {
    if(fun(arr[i] === "number")){
      return true;
    }
  }
      return false;
}

function checkSomeTrue(number){
  return typeof number === "number"
}

console.log(some([1,2,"3"], checkSomeTrue))
