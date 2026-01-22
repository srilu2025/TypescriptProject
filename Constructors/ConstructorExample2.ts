/**Scenario: Using a Parameterized Constructor
Given I have a class "Employee" with a constructor that accepts "name" and "age" parameters

When I create an instance of the "Employee" class and pass values for "name" and "age"

Then The properties "name" and "age" should be initialized with the provided values

And The method "display" should log "Employee: [name], Age: [age]" */

class Employee{

      myName:string;
      age:number;

      constructor(myName:string,age:number){

             this.myName=myName;
             this.age=age;
      }
      display(){

        console.log(`Employee : ${this.myName}, Age : ${this.age}`);
      }
    
}
let emp=new Employee("tom",20);
emp.display();