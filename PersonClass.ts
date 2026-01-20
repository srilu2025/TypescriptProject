/**Scenario: Defining a Person class with default properties
Given The object "Person" has properties "name" as "John" and "age" as 30

When I create a method "introduce" that returns a greeting using the "name" and "age" properties

Then The method should return a greeting message: "Hello, my name is John and I am 30 years old." */

// class PersonClass{

//     name:string="John";
//     age:number=30;

//     introduce():string{

         
          
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// let p1=new PersonClass();
// console.log(p1.introduce());

/**Scenario: Creating an instance of the Person class
Given The class "Person" is defined with default values for "name" and "age"

When I create an instance of "Person"

Then The instance should have the "name" property as "John" and "age" property as 30 by default */

class PersonClass{

    name:string="";
    age:number=0;

    introduce(personName:string,personAge:number):void{

         this.name=personName;
         this.age=personAge;
         console.log(`name of the person is ${this.name} and age is ${this.age}`);

    }
}
let p2=new PersonClass();
p2.introduce("John",30);