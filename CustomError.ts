//custom error classesss

class ElementError extends Error{
       constructor(message:string){
            super();//used to call the parent[Error class] constructor
      }
}

class BrowserError extends Error{
       constructor(message:string){
            super();//used to call the parent[Error class] constructor
      }
}

class FrameworkError extends Error{
       constructor(message:string){
            super();//used to call the parent[Error class] constructor
      }
}

let browser='srilu';
switch(browser){
    case 'chrome':
        console.log('open chrome');
        break;
    default:
        console.log('paqss correct browser');
        throw new BrowserError('=====INVALID BROWSER======'+browser);//here we used the custom class to throw error
 }
console.log('enter app url');


