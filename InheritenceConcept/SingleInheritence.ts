/**Scenario: Demonstrating Single Inheritance
Given a class "Person" with a method "introduce"

And a class "Student" that extends "Person" with a method "study"

When an object of "Student" is created

Then calling "introduce" should print "Hi, I am a Person"

And calling "study" should print "I am studying" */

class Person{

       introduce():void{
          console.log("Hi, I am a Person")

       }
}
class Student extends Person{

   study():void{
    console.log("I am studying")
   }        
}

let stu=new Student();
stu.introduce();
stu.study();
