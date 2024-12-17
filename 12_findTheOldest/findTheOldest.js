const findTheOldest = function(people) {
    //let oldest = people.reduce();
    let currentYear = 2024;
    let oldestPerson = {};
    const oldestAge = people.reduce((currentOldest, person) => {
        if(person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if(age > currentOldest){
            oldestPerson = person;
            return age;
        } else {
            return currentOldest;
        }
    }, 0)
    return oldestPerson;  
};

//calculate the  age of each person
//compare age of each person



// Do not edit below this line
module.exports = findTheOldest;
