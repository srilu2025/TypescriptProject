//3 types of the modifiers:to what lecvel we need to give access the members
//public:-sameclass,subclass,outsideclass
//  private--sameclass,notsub,outside class
// protecrted:-sameclass,subclass,not outside class

class User{
    public testing():void{
          console.log("testing method");

    }
    private coding():void{
        console.log("coding method");
    }
    public doCoding():void{
        this.coding();
    }
    protected management():void{
        console.log("management method");
    }
}
class Employee extends User{
    public reading():void{
        console.log("reading");
        this.testing();
        this.management();
        this.doCoding();
        let e1:Employee=new Employee();
        e1.reading();//
        e1.testing();
    }
}

//outside class
let u1:User=new User();
u1.testing();





