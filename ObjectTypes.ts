/**Scenario: Using Objects in TypeScript

Given I want to store a person's name and age

When I declare a variable named person

Then I should assign the name as "Alice" and the age as 30 inside an object

Note: Try with object, any, and inline type like { name: string; age: number } */


let person:{name:string;age:number}={

   name:"Alice",
   age:30
}


console.log("name of the person is",person.name);
console.log("age of the person is",person.age);

/**Scenario: Working with Arrays

Given I want to store a list of numbers and names

When I declare two variables: numbers and names

Then I should assign [1, 2, 3] to numbers and ["Alice", "Bob", "Charlie"] to names

Note: Use both number[] and Array<string> syntax */


let numbers:(number)[]=[1,2,3];

let names:Array<string>=["Alice","Bob","charlie"];


console.log(numbers);
console.log(names);

/**Scenario: Declaring Tuples

Given I want to store a person's name and age in fixed order

When I declare a variable called tuple

Then I should assign a string as the first value and a number as the second, like ["Alice", 30]

 */

let tuple:[string,number]=["Alice",30];

//let valueList:[string,number]=[20,"tom"];

console.log(tuple);

/**Scenario: Using Enums

Given I want to define three colors: Red, Green, and Blue

When I create an enum called Color

Then I should declare a variable myColor and assign it the value Color.Green

And I should log the value of myColor (it should return 1) */

enum color{

     Red,
     Green,
     Blue

}
let myColor=color.Blue;

console.log("then the value of myColor is",myColor);