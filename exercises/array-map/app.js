var arr = [2, 5, 100];

var newArr = arr.map(function(arr){
  return(arr * 2)
})

console.log(newArr);

var stringItUp = [2, 5, 100];

var newString = stringItUp.map(function(j) {
  return(j.join);
})

console.log(newString);

var array = [
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]

var newArray = array.map(function (person){
return ("<h1>" + person.name + " </h1>" +  "<h2>" + person.age + "</h2>");

});

console.log(newArray)
