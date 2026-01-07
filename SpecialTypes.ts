/**Given I declare variables using special types in TypeScript

When TypeScript analyzes the assigned values

Then it should ensure they match the expected type behavior

Type	Name	Value
any	data	Could be anything
unknown	input	"welcome"
void	logMessage()	console.log("Hello")
never	error	function error(): never { throw new Error("Something went wrong"); }
undefined	value	let value: undefined = undefined;
null	empty	let empty: null = null; */

let data:any=true;
console.log(data);

let input:unknown="welcome";
console.log(input);


if(typeof input==="string"){

    console.log(input.toUpperCase())
}

function display():void{

    console.log("I am in the function");
}
display();

// function error():never{

//     throw new Error("Something went wrong");
// }
// error();

let value:undefined;
let empty:null=null;
console.log(value);
console.log(empty);