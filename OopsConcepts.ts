//Inheritance:

class Car{
    start(){
        console.log('Car start method');
    }
    stop(){
        console.log('car stop method');
    }
    engine(){
        console.log('car-engine');
    }

}

class BMW extends Car{
    override start(){
        console.log('BMW----start method');
    }
    autoParking(){
        console.log('BMW--auto parking');
    }
}

let bmw:BMW=new BMW();
bmw.start();
bmw.stop();
bmw.engine();
bmw.autoParking();
console.log('=======================');
let car:Car=new Car();
car.engine();
car.start();
car.stop();
console.log('=======================');

//child class object refered by parent class ref variable
//top casting IS a rELATIONSHIP

let c1:Car=new BMW();
c1.engine();
c1.start();
c1.stop();

//downcastin:parent class object can be referddby child class variable
let b1:BMW=new Car();//downcasting not allowed IS a rELATIONSHIP failed here

