/**Feature: Combine two object types using intersection
Scenario: Create a variable that includes properties from both Employee and Student
Given a type Employee with name: string and role: string

And a type Student with grade: number

When I declare a variable "person" with type Employee & Student

And I assign an object with name = "Alice", role = "Developer", and grade = 10

Then the assignment should be valid and include all properties from both types */

type Employee={name :string,role:string}
type Student={grade : number}

let person:Employee&Student=

{
   name:"Alice",
   role:"Developer",
   grade:10
   
}

console.log(person);

/**Feature: Accept an object with combined properties using intersection types
Scenario: Call a function with an object that satisfies both HasId and HasName
Given a type HasId with id: number

And a type HasName with name: string

And a function showDetails that accepts a parameter of type HasId & HasName

When I call showDetails with an object containing id = 1 and name = "Alice"

Then the function should log "ID: 1, Name: Alice" */

type HasId={id:number}
type HasName={name :string}

// let student:HasId&HasName={


//     id:1,
//     name:"Alice"
// }
// console.log(student);

function showDetails(person:HasId & HasName){

    console.log(`ID :${person.id}`);
    console.log(`Name : ${person.name}`);
}
showDetails({id:1,name:"Alice"});

/**Scenario: Create a variable with an intersection type
Given two types A with a: number and B with b: string

When I declare a variable "obj" with type A & B

And I assign an object with properties a = 10 and b = "Hello"

Then the assignment should be valid */


type A={a:number}
type B={b:string}

let obj:A&B={

    a:10,
    b:"Hello"
}
console.log(obj);

