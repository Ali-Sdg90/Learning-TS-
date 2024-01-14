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
for (const key in dynamicObj) {
    console.log(key, dynamicObj[key]);
}
//# sourceMappingURL=index.js.map