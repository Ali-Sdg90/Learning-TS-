"use strict";
const getKeys = (obj) => {
    const keys = Object.keys(obj);
    return keys;
};
let me;
me = {
    name: "ali",
    age: 21,
    date: "1402-08-11",
};
const keys = getKeys(me);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const output = me[key];
    console.log(output);
}
const logger = (input) => {
    console.log(input);
};
logger("hi");
logger(21);
let buyReq;
buyReq = [
    {
        product: [
            {
                name: "Product 1",
                price: 10.99,
                discount: 2.0,
                amount: 3,
            },
            {
                name: "Product 2",
                price: 19.99,
                amount: 1,
            },
        ],
        payment: {
            price: 50.97,
            method: "Credit Card",
        },
    },
];
const voidFunc = (input) => {
    const hello = "hello";
};
const nullFunc = (input) => {
    const hello = "hello";
    return null;
};
const undefinedFunc = (input) => {
    const hello = "hello";
    return undefined;
};
const anyFunc = (input) => {
    return 2;
};
const unknownFunc = (input) => {
    return 2;
};
console.log(unknownFunc());
const neverFunc = (input) => {
    while (true) { }
};
const value = "hello";
console.log(value.length);
let age = 21;
for (let i = 0; i < 10; i++) {
    age++;
}
//# sourceMappingURL=index.js.map