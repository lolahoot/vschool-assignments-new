// var arr = [2, 5, 100];

// var newArr = arr.map(function(arr){
//   return(arr * 2)
// });
// console.log(newArr);

// function strArr(arr) {
//   return arr.map(function(item, index){
//     return item.toString();
//   });
// }
// console.log(strArr(arr));

// var array = [
//   {name: "Angelina Jolie",age: 80}, {name: "Eric Jones",age: 2},{name: "Paris Hilton",age: 5}, {name: "Kayne West",age: 16}, {name: "Bob Ziroll",age: 100}
// ]
//
// var newArray = array.map(function (person){
// return ("<h1>" + person.name + " </h1>" +  "<h2>" + person.age + "</h2>");
// });
//
// console.log(newArray)

// var nameOnly = [
//   {name: "Angelina Jolie", age: 80}, {name: "Eric Jones", age: 2}, {name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}
// ]
//
// function thereIsNoSpoon(arr){
//   return arr.map(function(person){
//     if (person.age < 18) {
//       console.log(person.name + " is under age!!")
//     } else {
//       console.log(person.name + " can go to The Matrix")
//     }
//   })
// }
// thereIsNoSpoon(nameOnly);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// var arr1 = [
//   {name: "Angelina Jolie", age: 80}, {name: "Eric Jones", age: 2}, {name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}
// ]
// function readyToPutInTheDOM(arr){
//   return arr.map(function(person){
// return ("<h1>"+person.name+"</h1>"+"<h2>"+person.age+"</h2>");
//   })
// };
//
// console.log(readyToPutInTheDOM(arr1));
