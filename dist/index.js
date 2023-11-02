"use strict";
var _a;
let interns = [
    {
        name: "Ali",
        age: 21,
        ghID: "Ali_Sdg90",
        internID: 20,
    },
    {
        name: "Mostafa",
        age: 23,
        internID: 10,
    },
];
interns[0].name = "Mamad";
console.log(interns[0]);
const ali = {
    name: "Ali",
    age: 21,
    ghID: "Ali_Sdg90",
    internID: 20,
};
const mostafa = {
    name: "Mostafa",
    age: 23,
    internID: 10,
};
const showYear = (date, showDate = true) => {
    if (showDate) {
        return new Date(date).getFullYear();
    }
    else {
        return;
    }
};
console.log(showYear(new Date()));
console.log((_a = mostafa === null || mostafa === void 0 ? void 0 : mostafa.ghID) === null || _a === void 0 ? void 0 : _a.length);
console.log(mostafa.ghID);
//# sourceMappingURL=index.js.map