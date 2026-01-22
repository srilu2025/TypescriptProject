/**Scenario: Using a Default Constructor
Given I have a class "Person" with a constructor that does not accept parameters

When I create an instance of the "Person" class

Then The default constructor should be executed and log "Default constructor executed!" */

class Person{

    constructor(){

        console.log("Default constructor executed!");
    }


}
let person=new Person();
