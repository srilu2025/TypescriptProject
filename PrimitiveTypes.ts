/**Given I declare variables using primitive types in TypeScript

When TypeScript analyzes the assigned values

Then it should ensure they match the expected type

Type	Variable	Value
string	message	"Hello, TypeScript!"
number	age	42
boolean	isActive	true
bigint	largeNumber	9007199254740992
 */


let message:string="Hello, TypeScript!";
let age:number=42;
let isActive:boolean=true;
let largeNumber:bigint=9007199254740992n;

console.log(message);
console.log(age);
console.log(isActive);
console.log(largeNumber);
