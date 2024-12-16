const fibonacci = function(num) {
    
    if(Number(num) === 0){
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
    let sum = 1;
    let prev = 0;
    let temp = 1;
    for(let i = 1; i < num; i++){   
        sum = sum + prev;
        prev = temp;
        temp = sum;
        
        
        // prev = temp;
        
    }
    return sum;
}
};

// Do not edit below this line
module.exports = fibonacci;
