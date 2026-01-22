/**Scenario: Using static and readonly properties in a class
Given I have a class "Employee" with a static property "company" and a readonly property "id"

When I assign a value to "id" during the object initialization

Then The "id" property should be assigned successfully and cannot be modified later

When I access the static property "company" directly from the class without creating an instance

Then It should return the value "TechCorp"

When I create an instance of the "Employee" class with id 101 and name "Alice"

Then The instance should display "ID: 101, Name: Alice, Company: TechCorp" */


class Employee{

     static company:string;
     readonly id:number;
     name:string;

     constructor(id:number,name:string){

        this.id=id;
        this.name=name;
        console.log(this.id,this.name);
     }

    }
//let emp=new Employee(101);
Employee.company="TechCorp";

let emp1=new Employee(102,"Alice");
console.log("the company name is",Employee.company);