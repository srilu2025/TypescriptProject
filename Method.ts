class Animal{   
     sound():void{      
          console.log("Animal makes a sound")  
          }
        }
        class Dog extends Animal
        { sound():void
            {     
               console.log("Dog barks")   
             }
            }class Cat extends Animal
            {   
                 sound():void{  
                          console.log("Cat Meows") 
                           }
                        }
                        let a:Animal;
                        a=new Dog();
                        a.sound()