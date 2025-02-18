// Problem-01 : Calculate the VAT Amount 

function calculateVAT(price) {
    if (typeof price === 'number' && price > 0) {
        const vat = price * 7.5 / 100;
        return vat;
    }
    else { return "Invalid"; }
}
// console.log(calculateVAT(1500));



// Problem-02 :  Valid  Bangladeshi Number 

function validContact(contact) {

    if (typeof contact === 'string') {
        if (contact.length === 11 && contact.startsWith("01") && contact.includes(" ") !== true) {
            return true;
        } else { return false; }
    } else {
        return `"Invalid"`;
    }

}

// console.log(validContact("01681"));

// Problem-03 : Admission Success  (📚 Will He Succeed?)

function willSuccess(marks) {
    if (Array.isArray(marks)) {
        let pass = [];
        let fail = [];
        for (const number of marks) {
            if (number >= 50) {
                pass.push(number);
            } else {
                fail.push(number);
            }
        }
        if (pass.length > fail.length) {
            return true;
        } else {
            return false;
        }

    } else {
        return `"Invalid"`
    }
}

// console.log(willSuccess([48, 48, 50, 50, 100]));


//Problem-04: Valid Proposal

function validProposal(person1, person2) {
    if (typeof person1 === 'object' && typeof person2 === 'object') {
        if (person1.gender !== person2.gender) {
            const age = Math.abs(person1.age - person2.age);
            if (age <= 7) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return `"Invalid"`;
    }
}


// console.log(validProposal(
//     { name: "Rahul", gender: "male", age: 28 },
//     { name: "Joya", gender: "female", age: 21 }
// ))


// Problem-05: Let’s Calculate Total Sleep Time

function  calculateSleepTime( times ) {
    
}
