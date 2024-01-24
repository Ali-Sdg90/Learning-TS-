"use strict";
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
const ali2 = {
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
const createDynamicObj = (baseWord, count) => {
    const dynamicObj = {};
    for (let i = 0; i < count; i++) {
        const key = `${baseWord}-${i}`;
        dynamicObj[key] = randomValue();
    }
    return dynamicObj;
};
const randomValue = () => {
    return Math.floor(Math.random() * 90) + 10;
};
const dynamicObj = createDynamicObj("Ali", 10);
class Survivor {
    constructor(name, date, isHealing) {
        this.needHelp = () => {
            console.log("Hello, i'm fine. no i'm not...");
        };
        this.name = name;
        this.date = date;
        this.isHealing = isHealing;
    }
}
const Hello = new Survivor("Ali", "1402-11-01", !!Math.trunc(Math.random() * 2));
class Survivor2 {
    constructor(name, date, isHealing) {
        this.name = name;
        this.date = date;
        this.isHealing = isHealing;
        this.needHelp = () => {
            console.log("Hello, i'm fine. no i'm not...");
        };
    }
}
const Hello2 = new Survivor2("Ali", "1402-11-01", !!Math.trunc(Math.random() * 2));
let a;
let b = 1;
console.log(a !== null && a !== void 0 ? a : "a is falsy");
a && (a = "Aloha");
b && (b = 2);
console.log(a, b);
a || (a = "Aloha");
b || (b = 3);
console.log(a, b);
//# sourceMappingURL=index.js.map