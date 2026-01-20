/**id, myName, EmailID  --- Type alias User

create a object property - userdata-  created type alias then store the value */

type user={

    id:number,
    myName:string,
    EmailID:string
} 


let userdata:user={

      id:101,
      myName:"Alice",
      EmailID:"abc@123"

}

console.log(userdata);