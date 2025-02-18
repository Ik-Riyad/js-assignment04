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
            if(number>=50){
                pass.includes(number);
                pass.push(number);
            }else{
                fail.includes(number);
                fail.push(number);
            }
        }
        if (pass.length>fail.length) {
            return true;
        } else {
            return false;
        }
        
    } else {
        return `"Invalid"`
    }
}

// console.log(willSuccess([60, 70, 80, 40, 30]));

