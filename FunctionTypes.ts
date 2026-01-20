/**Scenario: Explicit function types with a named function
Given I want to create a function that subtracts two numbers

When I call the function with 10 and 4

Then I should get 6 as the result */

function subtract(a:number,b:number){


    console.log(a-b);

}

subtract(10,4);

/**Scenario: Arrow function with explicit types
Given I want an arrow function that divides two numbers

When I call the function with 20 and 4

Then I should get 5 as the result */

const div=(x:number,y:number)=>{
    console.log((x/y));
}
div(20,4);

/**Scenario: Function with an optional parameter
Given I want a function that introduces a person by name and optional job title

When I call the function with "Emma" and no job title

Then I should get "This is Emma." */

function person(name:string,jobTitle?:string){

    console.log(`This is ${name}`);
}
person("Emma");

/**Scenario: Function with optional parameter and value provided
Given I want a function that introduces a person by name and optional job title

When I call the function with "Liam" and "Engineer"

Then I should get "This is Liam, the Engineer." */


function person1(name:string,jobTitle?:string){

     console.log(`This is ${name},the ${jobTitle}`);
}
person1("Liam","Engineer");


/**Scenario: Function using default parameter
Given I want a function that welcomes a person and assumes the country is "India" if not provided

When I call the function with "Aarav" and no country

Then I should get "Welcome Aarav from India." */

function person2(name:string,country:string="India"){

      console.log(`Welcome ${name} from ${country}`);

}
person2("Aarav")

/**Scenario: Function using default parameter with value provided
Given I want a function that welcomes a person with a custom country

When I call the function with "Sophia" and "Canada"

Then I should get "Welcome Sophia from Canada." */


function person3(name:string,country:string="Canada"){

console.log(`Welcome ${name} from ${country}`)

}
person3("Sophia","America");
























