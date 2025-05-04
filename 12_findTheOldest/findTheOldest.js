const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();
    let oldest = people.reduce((oldest, person) => {
        let oldestAge = (oldest.yearOfDeath || currYear) - oldest.yearOfBirth;
        let age = (person.yearOfDeath || currYear) - person.yearOfBirth;
        if (age >oldestAge){
            return person
        }
        return oldest
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
