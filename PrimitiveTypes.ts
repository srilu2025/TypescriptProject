


let message:string="Hello, TypeScript!";
let age:number=42;
let isActive:boolean=true;
let user:undefined=undefined;//indefined

let largeNumber:bigint=9007199254740992n;
let dis:bigint=100n;
console.log(dis+10n);//should always add with the bigint



console.log(message);
console.log(age);
console.log(isActive);
console.log(largeNumber);
console.log(user)

//any type
let test:any;
test=100;
test="sri";
test=true;
console.log(test);

//unknown type
let value:unknown="hello";
console.log(value);

//void type:no return anything from the function
function testing():void{
    console.log("hello");
}
testing();

function getMarks(stuName:string):void{
  console.log(stuName,100);
}
getMarks('tom');

//never:represents value never occur,will never happen...error,infinite loop
function throwEleError(locator:string):never{
         throw new Error(locator+" is not found.....");
}
throwEleError('loginBtn');


//union type
let id:string | number | boolean | any;
id="sri";
id=100;
console.log(id);
console.log(typeof id);
//in javascript eberything will bwe considere as string

//arrays:dynamic array
let marks:number[]=[10,202,30,40];
console.log(marks);
console.log(marks.length);

let devices:string[]=['macBook pro','airtel sim','iphone 17'];
console.log(devices);

let names:Array<string>=["tom",'tim','pom'];
let namesVal:Array<string | number>=['tom',100];
let mixValues:Array<any>=[10,'tom',null];



//tuple:fixed length Array with the specific types
//static array
let user1:[string,number]=['sam',39];
console.log(user1);

let person:[string,string,number,boolean]=['tippu','pappu',30,true];
console.log(person);

//ogjects:

let newUser={
    name:'sri',
    sal:12.33,
    isActive:true,
    city:'uk'
};
console.log(newUser.name);//

//custom type for the object:using type alias
type userType={readonly name:string,salary:number,isActive:boolean};

let newUser1:userType={
  name:'sri',
    salary:12.34,
    isActive:false
}
    

console.log(newUser1);
//newUser1['email']; not allowed
newUser1.salary=10.34;
//newUser1.name='tom';//not allowed beacause readonly property



























































