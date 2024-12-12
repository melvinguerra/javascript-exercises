const sumAll = function(num1, num2) {
    let sum = 0;
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    } else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return "ERROR";
    } else {
        if(num1 > num2){
            for(let x = num2; x <= num1; x++){
                sum += x;
            }
        } else {
            for(let x = num1; x <= num2; x++){
                sum += x;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
