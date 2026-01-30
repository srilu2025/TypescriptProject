/**Scenario: Exporting and importing properties individually
Given a file math.ts exports PI, add, and Calculator individually

When another file imports them using import { PI, add, Calculator }

Then using PI should return 3.14

And calling add(2, 3) should return 5

And calling calc.multiply(4, 5) should return 20 */

// export const PI:number=3.14;

// export function add(a:number,b:number):number{

//      return a+b;

//    }
//  export  class Calculator{

//     multiply(a:number,b:number):number{
//           return a*b;
//     }
  
// }

/**Scenario: Exporting multiple items together
Given a file math.ts defines and exports PI, add, and Calculator using grouped export

When imported using the same destructuring syntax

Then functionality remains identical to individual exports */

 const PI:number=3.14;

 function add(a:number,b:number):number{

     return a+b;

   }
   class Calculator{

    multiply(a:number,b:number):number{
          return a*b;
    }
  
}
export {PI,add,Calculator};

/**Scenario: Default export
Given a file logger.ts exports a default function log

When imported using import log from "./logger"

Then calling log("Hello, TypeScript!") should output LOG: Hello, TypeScript! */


class Logger{

    log(message:string):void{
        console.log(`LOG: ${message}`);
    }
}
export {Logger}