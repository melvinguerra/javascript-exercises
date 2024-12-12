const removeFromArray = function(arr, ...Args) {
    let strippedArray = arr;
    for(let i = 0; i < Args.length; i++){
        strippedArray = strippedArray.filter(ar => ar !== Args[i]);
  }
  return strippedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
