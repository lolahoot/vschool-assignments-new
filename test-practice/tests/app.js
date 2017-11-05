function findFunction(searchTerm, phrases){
    return phrases.filter(function(phrase){
        return phrase.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })

}



module.exports = findFunction;


//function findFunction(searchTerm, phrases){
//     return phrases.filter(function(phrase){
//         return phrase.length > 4;
//     })
// }
//
//
//
// module.exports = findFunction;
