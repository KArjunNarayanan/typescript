// function checkPositive(num: number): string {
//     if(num > 0){
//         return "Positive";
//     }else {
//         return "Negative";
//     }
// }
// console.log(checkPositive(90));


// function sumDisplay(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(sumDisplay(20,30));


// function squareDisplay(num: number): number {
//     return num*num;
// }
// console.log(squareDisplay(2));


// function displayName(name: string):string {
//     return `Hello ${name}`;
// }
// console.log(displayName("Arjun"));

// function checkEligibleToVote(age: number): string {
//     if(age >= 18){
//         return `Eligible to vote`;
//     }else {
//         return `Not eligible to vote`;
//     }
// }
// console.log(checkEligibleToVote(19));


// function checkLargest(num1: number, num2: number){
//     if(num1 > num2){
//         return `${num1} is greater than ${num2}`;
//     }else{
//         return `${num2} is greater than ${num1}`;
//     }
// }
// console.log(checkLargest(45,50));


// // F = (°C × 1.8) + 32
// function temperatureConvert(celsius: number): string {
//     let farenheit = (celsius * 1.8) + 32;
//     return `${farenheit}°F `
// }
// console.log(temperatureConvert(20));


// function areaRectangle(l: number, b: number): number{
//     return l*b;
// }
// console.log(areaRectangle(5,6));

// function perimeterRectangle(l: number, b: number): number{
//     return 2*(l*b);
// }
// console.log(perimeterRectangle(5,6));

// function stringLength(str: string): number{
//     return str.length;
// }
// console.log(stringLength("Arjun"));


// // // Optional/defautl Parameters

// function greet(name?: string):string {
//     return `Hello....${name}`;
// }
// console.log(greet("arju"));


// function displayCountry(country: string = "india"):string {
//     return `Country Name: ${country}`;
// }
// console.log(displayCountry());

// function optionalAge(name: string, age?: number): string {
//     if(age){ return `Name: ${name} and Age: ${age}`}
//     else{ return `Name: ${name}`}
// }
// console.log(optionalAge("arjun",10));

// function defaultDiscount(price: number, discount: number = 10) {
//     return price - (price*(discount/100));
// }
// console.log(defaultDiscount(200));

// function priceCalculator(price: number, discount: number) {
//     let newPrice = price - (price*(discount/100));
//     return `Amount after discount: ${newPrice}`;
// }
// console.log(priceCalculator(200,10));


// const add = (a: number, b:number) => {
//     return a+b;
// }
// console.log(add(10,20));

// const mul = (a: number, b:number) => {
//     return a*b;
// }
// console.log(mul(5,2));

// const checkOdd = (a:number):string => {
//     if(a%2 !== 0){return `ODD`}
//     else{return "not odd"}
// }
// console.log(checkOdd(8));


// const convertString = (str: string) => {
//     return str.toUpperCase();
// }
// console.log(convertString("arjun"));



// const studentStatus = (mark: number) => {
//     if(mark >=50 ){
//         return "PASS";
//     }else{
//         return "FAIL";
//     }
// }
// console.log(studentStatus(8));


// // Exercis 1 - Generic Identity


// function identity<T>(value: T): T {
//     return value;
// }
// let res1 = identity(100);
// console.log("Number: ",res1);
// res1 = identity("Hai");
// console.log("String: ",res1);
// res1 = identity(true);
// console.log("Boolean: ",res1);


// // Exercise 2 – First Element
// // Create a function that returns first element: 
// // Test with:
// // [10, 20, 30]
// // and:
// // ["HTML", "CSS", "JavaScript"]


// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
// }
// console.log(getFirstElement([10,20,30]));
// console.log(getFirstElement(["HTML","CSS","JavaScript"]));

// // Exercise 3 – Pair
// // Create a function that returns
// // ("Age", 25)

// function displayAge<T, U>(a: T, b: U){
//     return {a,b};
// }
// console.log(displayAge("Age",25));


// Exercise 4 – Generic Interface
// // Create:
// // interface Container<T> {
// //     value: T;
// // }
// // Create:
// // Container<number>
// // Container<string>
// // Container<boolean>


interface Container<T> {
    value: T;
}

const num: Container <number> = {
    value: 100;
}
const str: Container <string> = {
    value: "Arjun";
}
const bool: Container <boolean> = {
    value: true;
}
console.log(num);
console.log(str);
console.log(bool);



// // Exercise 5 – API Response
// // Create:
// // interface ApiResponse<T> {
// //     data: T;
// //     status: number;
// // }

// // Create responses for:
// // - Student
// // - Product
// // - Employee

interface ApiResponse<T> {
    data: T;
    status: number;
}

interface Student {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
}

interface Employee {
    name: string;
    salary: number;
}

const studentResponse: ApiResponse<Student> = {
    data: {
        name: "Arju",
        age: 12
    },
    status: 200
};

const productResponse: ApiResponse<Product> = {
    data: {
        name: "Laptop",
        price: 50000
    },
    status: 200
};

const employeeResponse: ApiResponse<Employee> = {
    data: {
        name: "Rahul",
        salary: 40000
    },
    status: 200
};

console.log(studentResponse);
console.log(productResponse);
console.log(employeeResponse);











