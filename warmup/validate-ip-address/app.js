function ipFinder(str){
  var decimal = str.split('.');
  if(decimal.length === 4){
    return decimal.every(function(decimal){
      return parseInt(decimal) >= 0 && parseInt(decimal) <= 255
    });
  }
}
// console.log(ipv4("172.240.39.1"));

let ipFinder = (str) => {
    var strArr = str.split('.');
    var filtered = strArr.filter(function(x){return (x <= 255 && x >= 0) && x != /[a-zA-Z]/ && x != ''}).join('.');
    return filtered == str;
}


module.exports = ipFinder
