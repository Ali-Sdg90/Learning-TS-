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

const funcTS = (num1: number, num2: number): number => {
    return num1 + num2;
};

const funcResult: number = funcTS(3, 5);

console.log(funcResult);

// ---------------------------------------

const showDate = (): Date => {
    return new Date();
};

const stringDate: string = String(showDate());

const showTimeStamps = (date: Date): number => {
    return new Date(date).getTime();
};

let anyValue: any = "any!";

anyValue = showTimeStamps(showDate());

console.log(typeof anyValue);
console.log(anyValue);

const logger = (log: any): void => {
    console.log(log);
};

logger(anyValue);

// ---------------------------------------

// let voider : void = "23";
// console.log(voider);

// ---------------------------------------
