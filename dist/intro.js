"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calc(inc, tax) {
    if ((tax || 2022) < 2022)
        return inc * 2;
    return inc * 3;
}
function calc2(inc, tax = 2022) {
    if (tax < 2022)
        return inc * 2;
    return inc * 3;
}
calc(10100, 2022);
calc(10100);
calc2(10100);
let employess = {
    id: 1, name: "Zainab", retire: (date) => {
        console.log(date);
    }
};
let EmployesShorter = {
    id: 1, name: "Zainab", retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(w) {
    if (typeof w === 'number')
        return w * 2.2;
    else
        return parseInt(w) * 2.2;
}
KgToLbs(10);
KgToLbs("10Kg");
//# sourceMappingURL=intro.js.map