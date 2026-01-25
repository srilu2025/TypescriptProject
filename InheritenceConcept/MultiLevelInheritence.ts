/**Scenario: Demonstrating Multilevel Inheritance
Given a class "Machine" with a method "start"

And a class "Computer" that extends "Machine" with a method "boot"

And a class "Laptop" that extends "Computer" with a method "portable"

When an object of "Laptop" is created

Then calling "start" should print "Machine started"

And calling "boot" should print "Computer booting"

And calling "portable" should print "Laptop is portable" */

class Machine{

    start():void{
        console.log("Machine started");
    }
}
class Computer extends Machine{

    boot():void{
        console.log("Computer booting")
    };
}
class Laptop extends Computer{

    portable():void{
        console.log("Laptop is portable");
    }
}
let laptop=new Laptop();
laptop.start();
laptop.boot();
laptop.portable();