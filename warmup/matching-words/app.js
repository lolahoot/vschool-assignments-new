let oldWords = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
// function matching(str) {
// const words = oldWords.split(" ");
// let temp;
// const repeated = [];
// for (let i = 0; i < words.length; i++){
//   temp = words[i];
//   for (let j = i; j < words.length; j++){
//     if (repeated.includes(temp)) {
//       break;
//     } else if (temp === words[j + 1]) {
//       repeated.push(temp);
//     }
//   }
// }
//   return repeated;
// }

const matching = str => {
    const codeArr = str.replace('/\W/g', ' ').toLowerCase().split(' ').sort();
    console.log(codeArr);
    const double = codeArr.filter((item,index) => codeArr[index] === codeArr[index + 1]);
    return double.filter((item,index) => double[index] !== double[index + 1])
}
console.log(matching("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))
module.exports = matching;
