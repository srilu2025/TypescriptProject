import {PI,add,Calculator} from "./Example1";
import {Logger} from "./Example1"


let calc=new Calculator();
let mul=calc.multiply(4,5);
console.log(mul);

console.log(PI);
console.log(add(2,3));

let l1=new Logger();

l1.log("Hello, TypeScript!");
