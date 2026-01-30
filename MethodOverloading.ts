/**Scenario: Method Overloading – Same method name, different parameter types
Given a class "Printer" with overloaded method "print"

And it accepts either a number or a string as input

When calling "print(100)"

Then the output should be "Printing number: 100"

When calling "print('Document')"

Then the output should be "Printing document: Document" */

class Printer{
    print(value:number):void;
    print(value:string):void;

    print(value:number | string):void
{
    if(typeof value === "number"){
        console.log(`printing number : ${value}`);
    }else {
        console.log(`printing document : ${value}`);
    }
}        
    }
const printer=new Printer();
printer.print(100);
printer.print("Document");