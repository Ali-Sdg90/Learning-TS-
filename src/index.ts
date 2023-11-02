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

// const getKeys = (obj: object) => {
//     const keys: string[] = Object.keys(obj);
//     return keys;
// };

// let me: {
//     name: string;
//     age: number;
//     date: string;
// };

// me = {
//     name: "ali",
//     age: 21,
//     date: "1402-08-11",
// };

// const keys: Array<any> = getKeys(me);

// for (let i: number = 0; i < keys.length; i++) {
//     const key: string = keys[i];
//     const output: any = me[key as keyof typeof me];
//     console.log(output);
// }

// ---------------------------------------

// const logger = (input: string | number): void | object[] => {
//     console.log(input);
// };

// logger("hi");
// logger(21);

// ---------------------------------------
// Anonymous types

// let product: Array<{
//     name: string;
//     price: number;
//     discount: number | undefined;
//     amount: number;
// }>;

// let payment: { price: number; method: string };

// let buyReq: {
//     product: {
//         name: string;
//         price: number;
//         discount?: number;
//         amount: number;
//     }[];
//     payment: {
//         price: number;
//         method: string;
//     };
// }[];

// buyReq = [
//     {
//         product: [
//             {
//                 name: "Product 1",
//                 price: 10.99,
//                 discount: 2.0,
//                 amount: 3,
//             },
//             {
//                 name: "Product 2",
//                 price: 19.99,
//                 amount: 1,
//             },
//         ],
//         payment: {
//             price: 50.97,
//             method: "Credit Card",
//         },
//     },
// ];

// ---------------------------------------

// const voidFunc = (input: any): void => {
//     const hello = "hello";
//     // return "hi";
// };

// const nullFunc = (input: any): null => {
//     const hello = "hello";
//     return null;
// };

// const undefinedFunc = (input: any): undefined => {
//     const hello = "hello";
//     // return hello;
//     // return bye;
//     return undefined;
// };

// const anyFunc = (input?: any): any => {
//     return 2;
// };

// const unknownFunc = (input?: any): unknown => {
//     return 2;
// };

// console.log(unknownFunc());

// const neverFunc = (input: any): never => {
//     while (true) {}
// };

// ---------------------------------------

// const value: unknown = "hello";
// console.log((value as string).length);

// ---------------------------------------

// let age = 21;
// for (let i: number = 0; i < 10; i++) {
//     age++;
// }

// ---------------------------------------

// const tuples: [string, number] = ["ali", 21];

// ---------------------------------------

// const calculateTax = (
//     income: number,
//     taxYear: number = +new Date().getFullYear()
// ): number => {
//     console.log(`selected year: ${taxYear}`);

//     if (taxYear > 2020) {
//         return income * 1.4;
//     }
//     return income * 1.1;
// };

// console.log("=>", calculateTax(10_000));

// ---------------------------------------

let interns: {
    name: string;
    age: number;
    ghID?: string;
    readonly internID: number;
}[] = [
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

// interns[0].internID = 30;
console.log(interns[0]);

// ---------------------------------------

type intern = {
    name: string;
    age: number;
    ghID?: string;
    readonly internID: number;
};

const ali: intern = {
    name: "Ali",
    age: 21,
    ghID: "Ali_Sdg90",
    internID: 20,
};

const mostafa: intern = {
    name: "Mostafa",
    age: 23,
    internID: 10,
};

// ---------------------------------------

const showYear = (date: Date, showDate: boolean = true): number | undefined => {
    if (showDate) {
        return new Date(date).getFullYear();
    } else {
        return;
    }
};

console.log(showYear(new Date()));

// ---------------------------------------

console.log(mostafa.ghID);
console.log(mostafa?.ghID?.length);
