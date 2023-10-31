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
// var funcTS = function (num1, num2) {
//     return num1 + num2;
// };
// var funcResult = funcTS(3, 5);
// console.log(funcResult);
// // ---------------------------------------
// var showDate = function () {
//     return new Date();
// };
// var stringDate = String(showDate());
// var showTimeStamps = function (date) {
//     return new Date(date).getTime();
// };
// var anyValue = "any!";
// anyValue = showTimeStamps(showDate());
// console.log(typeof anyValue);
// console.log(anyValue);
// var logger = function (log) {
//     console.log(log);
// };
// logger(anyValue);
// const loggerFunc = (func: Function): Function => {
//     return func;
// };
// loggerFunc(logger);
