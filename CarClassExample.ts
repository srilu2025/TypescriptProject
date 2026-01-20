/**Scenario: Defining a basic class structure
Given I want to create a class called "Car"

When I define a property "brand" of type string

And I define a method "start" that returns a string

Then The method should return "Toyota is starting..." when the brand is "Toyota" */


// class CarClassExample{

//    brand:string="Toyota";

//    start():string{

//     console.log(`brand of the car is ${this.brand} `);
//     return "Toyota is starting...";
//    }
//    }
   
//    console.log("the returned value is",c1.start(););

   /**Scenario: Creating an instance of the Car class
Given I have a class "Car" with a property "brand" and a method "start"

When I create an instance of the "Car" class and set the brand to "Toyota"

Then I should be able to call the "start" method and get the output "Toyota is starting..." */

class CarClassExample{

   brand:string="Toyota";

   start():string{

    console.log(`brand of the car is ${this.brand} `);
    return "Toyota is starting...";
   }
   }
   let c2=new CarClassExample();
   let returnValue=c2.start();
   console.log("the returned value is",returnValue);

   /** */