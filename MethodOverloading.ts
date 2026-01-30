/**Scenario: Method Overloading – Same method name, different parameter types
Given a class "Printer" with overloaded method "print"

And it accepts either a number or a string as input

When calling "print(100)"

Then the output should be "Printing number: 100"

When calling "print('Document')"

Then the output should be "Printing document: Document" */

class Printer{
    print():void{
        
    }
}