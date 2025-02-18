// Problem-01 : Calculate the VAT Amount 

function calculateVAT(price) {
    if (typeof price === 'number' && price > 0) {
        const vat = price * 7.5 / 100;
        return vat;
    }
    else { return "Invalid"; }
}
console.log(calculateVAT(1500));