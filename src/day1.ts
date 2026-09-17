// 1. What is TypeScript?
//    Typescript is a superset of JavaScript that adds static typing to JavaScript.

// What is a superset?
// Javascript + Typescript features = TypeScript

// The Javascript program code works in TypeScript

// let fname = "Megha";
// console.log(fname);

// But typescript allows us to add types

// let firstname: string = "Megha";
// console.log(firstname);

// why typescript ?
// let age = 25; // age => number
// age = "twenty five"; // age => string

// Javascript is dyanamically typed
// This can cause problems in large applications.

// for eg:-
// function calculateAge(){
//     return age + 5;
// }
// console.log(calculateAge('25')); // here "25" + 5 becomes string concatenation


// TypeScript helps catch this kind of mistake earlier.
// function calculateAge(age: number): number {
// return age + 5
//}
// console.log(calculateAge(25));


// Javascript                                   |           Typecript
// Dynamically typed                            |  Statically typed
// .js file                                     |  .ts file
// Browser can execute directly                 |  Usually compiled / transpiled to Javascript
// Type checking happens mainly at runtime      |  Type checking happens during development / compiler
// Easier to start                              |  More structured for large applications
// Fewer type annotations                       |  Supports type annotations


// Typescript does not replace javascript instead:
// "TypeScript is JavaScript with additional features, especially a type system, 
// which is then transformed into JavaScript that can run in environments such as browsers."

// Main advantages of TypeScript
// 1. Static type checking
    // let age: number = 25;
//     This tells Typescript: age should contain a number.
//     age = "hello";   // This is incorrect:

// 2. Better code completion
//      Editors such a VS code can understand the types.
//      For ecample:
//      let studentName: string = "Arun";

//      When you type:
//      studentName.   (the editor knows that this is a string and can suggest string methods.)


// 3. Easier debugging
//      Many errors are caught while writing the code instead of discovering them after running the application

// 4. Better for large projects
//      Typescript becomes particularly usefull when applications become large.
//      This is one reason it is commonly used with :
//      React + Typescript

//  5. Is Typescript a completely different language?
//     No
//      TypeScript includes JavaScript.

// For example:   // normal JavaScript
// let x = 10;
// if (x > 5) {
//      console.log("Greater"); 
//}

// TypeScript adds additional features such as:
//   let x: number = 10;
// So:
//     Javascirpt + types + Additional TypeScript features = TypeScript

// 6. How does TypeScript actually work?
// A: browser understand javascript,
// A: browser does not normally execute typescript directly
// suppose we created:
// app.ts
    let age: number = 25;
    console.log(age);

    // we cannot simply  expect the browser to execute the type script syntax.
    // instead, type
    