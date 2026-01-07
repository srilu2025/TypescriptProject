/**Feature: Allow a variable to hold either a number or a string using union types
Scenario: Assign different types to a union-typed variable
Given a variable "id" with type number | string

When I assign the number 101 to "id"

And I assign the string "ABC" to "id"

Then both assignments should be valid */

let id:number | string;

id=101;

id="ABC";

console.log(id);

/**Feature: Accept a number or a string as a function parameter using union types
Scenario: Call a function with a number or a string
Given a function printId that accepts a parameter of type number | string

When I call the function with 123

And I call the function with "XYZ"

Then both calls should be valid and print the ID value */

function method1(printId:number | string){


    console.log("i am in method",printId);
}
method1(123);
method1("XYZ");

/**Scenario: Assign different types to a union type variable
Given a variable "value" with type number | string

When I assign the number 42 to "value"

And I assign the string "Hello" to "value"

Then both assignments should be valid */

let value:(number | string);

value=42;
value="Hello";

console.log(value);
