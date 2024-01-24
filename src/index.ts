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
// console.log(interns[0]);

// ---------------------------------------

type intern = {
    name: string;
    age: number;
    ghID?: string;
    readonly internID: number;
};

const ali2: intern = {
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

// console.log(showYear(new Date()));

// ---------------------------------------

// console.log(mostafa.ghID);
// console.log(mostafa?.ghID?.length);

// My Stackoverflow Question :)

const createDynamicObj = (baseWord: string, count: number) => {
    const dynamicObj: Record<string, number> = {};

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

// for (const key in dynamicObj) {
//     console.log(key, dynamicObj[key]);
// }

// const dynamicObj2 = {
//     "Ali-0": 35,
//     "Ali-1": 66,
//     "Ali-2": 50,
//     "Ali-3": 79,
//     "Ali-4": 33,
//     "Ali-5": 62,
//     "Ali-6": 30,
//     "Ali-7": 52,
//     "Ali-8": 89,
//     "Ali-9": 16,
// };

// ---------------------------------------

interface SurvivorFormat {
    name: string;
    date: string;
    isHealing: boolean;
    needHelp: () => void;
}

class Survivor implements SurvivorFormat {
    name: string;
    date: string;
    isHealing: boolean;

    constructor(name: string, date: string, isHealing: boolean) {
        this.name = name;
        this.date = date;
        this.isHealing = isHealing;
    }

    needHelp = () => {
        console.log("Hello, i'm fine. no i'm not...");
    };
}

const Hello = new Survivor(
    "Ali",
    "1402-11-01",
    !!Math.trunc(Math.random() * 2)
);

interface SurvivorFormat2 {
    name: string;
    date: string;
    isHealing: boolean;
    needHelp: () => void;
}

class Survivor2 implements SurvivorFormat2 {
    constructor(
        public name: string,
        public date: string,
        public isHealing: boolean
    ) {}

    needHelp = () => {
        console.log("Hello, i'm fine. no i'm not...");
    };
}

const Hello2 = new Survivor2(
    "Ali",
    "1402-11-01",
    !!Math.trunc(Math.random() * 2)
);

// ---------------------------------------

let a;
let b = 1;

console.log(a ?? "a is falsy");

a &&= "Aloha";
b &&= 2;

console.log(a, b);

a ||= "Aloha";
b ||= 3;

console.log(a, b);
