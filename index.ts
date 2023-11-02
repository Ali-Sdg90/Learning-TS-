// let boo = "hello!";

// console.log("Hello TS", boo);

// boo = "3";

// console.log(boo);

// => node index.ts

// const stringType: string = "Aloha";

// console.log(stringType, typeof stringType);

// let numberType: number;

// numberType = 10;

// console.log(numberType);

// const PI: typeof numberType = 3.14;

// console.log(typeof PI, PI);

// ---------------------------------------

// const funcTS = (num1: number, num2: number): number => {
//     return num1 + num2;
// };

// const funcResult: number = funcTS(3, 5);

// console.log(funcResult);

// ---------------------------------------

// const showDate = (): Date => {
//     return new Date();
// };

// const stringDate: string = String(showDate());

// const showTimeStamps = (date: Date): number => {
//     return new Date(date).getTime();
// };

// let anyValue: any = "any!";

// anyValue = showTimeStamps(showDate());

// console.log(typeof anyValue);
// console.log(anyValue);

// const logger = (log: any): void => {
//     console.log(log);
// };

// logger(anyValue);

// ---------------------------------------

// let voider : void = "23";
// console.log(voider);

// ---------------------------------------

const getKeys = (obj: object) => {
    const keys: string[] = Object.keys(obj);
    return keys;
};

const me: object = {
    name: "ali",
    age: 21,
    date: "1402-08-11",
};

const keys: Array<string> = getKeys(me);

for (let i = 0; i < keys.length; i++) {
    console.log(me[keys[i]]);
}

// ---------------------------------------

const logger = (input: string | number): void | object[] => {
    console.log(input);
};

logger("hi");
logger(21);

// ---------------------------------------
// Anonymous types

// let product: Array<{
//     name: string;
//     price: number;
//     discount: number | undefined;
//     amount: number;
// }>;

// let payment: { price: number; method: string };

let buyReq: {
    product: {
        name: string;
        price: number;
        discount?: number;
        amount: number;
    }[];
    payment: {
        price: number;
        method: string;
    };
}[];

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

// ---------------------------------------
