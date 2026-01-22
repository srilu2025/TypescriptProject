/**Scenario: Creating and displaying car details with constructor overloading
Given I have a class "Car" with properties "brand", "model", and "year"

When I define a constructor that accepts "brand", "model", and an optional "year" parameter

And I set a default value of 2024 for "year" if it is not provided

When I create an instance of the "Car" class with the parameters "Toyota", "Corolla", and 2022

Then The instance should have "brand" as "Toyota", "model" as "Corolla", and "year" as 2022

When I create another instance of the "Car" class with the parameters "Honda", "Civic" (without providing "year")

Then The instance should have "brand" as "Honda", "model" as "Civic", and "year" defaulting to 2024

When I call the "display" method on both instances

Then The first car should display "Toyota Corolla - Year: 2022" and the second car should display "Honda Civic - Year: 2024" */

class Car{

     brand:string;
     model:string;
     year:number;

     constructor(brand:string,model:string,year?:number){
      
        this.brand=brand;
        this.model=model;
        this.year=year || 2024;

     }
     display():void{
        console.log(this.brand,this.model,this.year);
     }

}
let car=new Car("Toyota","Corolla",2022);
let car1=new Car("Honda","Civic");
car.display();
car1.display();