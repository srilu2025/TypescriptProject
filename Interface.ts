//1.always define the prototype of objects,classess
//cannot create the object of interface
//only method declaration:no method body

//interface with the objects:todefine the shape/blueprint

interface User{
     name:string;
     age:number;
     salary?:number;
     readonly company:string //readonly is constnt
     coding():void;//no method body
}
let u1:User={
    name:'tom',
    age:30,
    company:'IBM',
    coding():void{
        console.log(`${this.name} is coding`);
    }
}
console.log(u1);
u1.coding();

// interface USMedical{
//     physio():void;
//     cardio():void;

// }

// interface UKMedical{

//     eNt():void;
//     oncology():void;
// }

// interface IndianMedical{

//     pedia():void;
//     dental():void;
// }

// class FortisHospital implements USMedical,UKMedical,IndianMedical{
//     cardio(): void {
//         console.log("FH--physio");
//     }
// }

