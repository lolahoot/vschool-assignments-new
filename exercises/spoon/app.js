// var table = {
//     material: "plastic",
//     heightInInches: 42
// }
//
// var airConditioner = {
//     model: "01245X",
//     brand: "blah blah",
//     isCool: true,
//     temperature: function(temp) {
//       if isCool === true console.log((temp) + ° + " is cool enough.");
//     } else {
//       console.log("It is too hot! Turn on the AC please.");
//     }
// }
//
// var floor = {
//     material: "wood",
//     color: "honey"
//     isOriginal: true,
//     isLikedBy: ["Lanie", "Scott", "Liz", "Olivia"]
// }
//
// var monitor = {
//   brand: "ASUS",
//   sizeInInches: 24,
//   hasWallpaperDisplayed: true
// }
//
// var door = {
//   material: "wood",
//   color: "white",
//   heightInFeet: 7.4,
//   peopleWhoUseDoor ["Marcus", "Eric", "Kyle", "Derek", "Bobby", "Neil", "Andrew", "Luke", "Frank", "Jeremy", "Dan", "Lanie"]
// }
//
// var mouse = {
//   colors: "gray, black",
//   brand: "logitech"
// }
//
// var computer = {
//   brand: "mac",
//   sizeInInches: 13,
//   hasWallpaperDisplayed: true
// }
//
// var shoes = {
//   type: "boots",
//   material: "leather",
//   color: "black",
//   size: "8"
// }
//
// var jacket = {
//   type: "hoodie",
//   color: "black",
//   closureType: "zipper"
// }

var lightInRoom = {
  howManySources: 2,
  whatTypes: ["windows", "lights"],
  favoriteType: function(a){
    console.log("My favorite type of light is " + (a));
  }
}
lightInRoom.favoriteType(windows);
