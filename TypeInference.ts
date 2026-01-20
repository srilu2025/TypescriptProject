/**Scenario: Variable - Type Inference
Given I declare a variable and assign it a value

When TypeScript analyzes the assigned value

Then it should infer the correct type for the variable without explicit type annotations

Variable	Assigned Value
username	Alice
age	30
isAdmin	true
 */


let userName="playwright";
//userName=10;----cannot assign the value as "number" type as it is string type.
console.log(typeof userName);

let age=30;
console.log(typeof age);

let isAdmin=true;
console.log(typeof isAdmin);

/**Scenario: Function Return - Type Inference
Given I define a function that returns a value

When TypeScript analyzes the return value

Then it should infer the correct return type without explicit annotations

Function	Return Value
getUser	{ name: "Alice", age: 30 }
add	Sum of two numbers
isEven	true or false based on input
 */

function getUser(){


    return { name: "Alice", age: 30 };
}

function add(a:number,b:number){
    return a+b;
}

function isEven(num:number){

    if(num%2==0){
         return true;
    }
        else
            return false;
}

console.log("the return value from the getUser() is",getUser());
console.log("the return value from the add() is",add(13,21));
console.log("the return value from the isEven() is",isEven(4));

/**Scenario: Array - Type Inference
Given I declare an array and assign it a set of values

When TypeScript analyzes the assigned values

Then it should infer the correct type for the array elements without explicit type annotations

Array	Assigned Values
numbers	[1, 2, 3, 4, 5]
names	["Alice", "Bob", "Charlie"]
booleans	[true, false, true]
 */

let numbers:number[]=[1,2,3,4,5];
let names:string[]=["Alice","Bob","Charlie"];
let booleans:boolean[]=[true,false,true];

//      or

let numbers1:Array<number>=[1,2,3,4,5];
let names1:Array<string>=["Alice","Bob","Charlie"];
let booleans1:Array<boolean>=[true,false,true];

console.log(numbers,numbers1);
console.log(names,names1);
console.log(booleans,booleans1);

/**Scenario: Object - Type Inference
Given I declare an object and assign properties with values

When TypeScript analyzes the assigned values

Then it should infer the correct type for each property without explicit type annotations

Object Property	Assigned Value
user.name	"Alice"
user.age	30
user.isAdmin	true */

let user={

     name:"Alice",
     age:30,
     isAdmin:true
}

console.log(user);










