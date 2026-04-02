//error or exception

function div(a:number,b:number):number{
if(b==0){
    throw new Error("cannot be divided by zero")
}
return a/b;
}

let r1=div(10,5);
//r1=div(10,0);
console.log(r1);

//convert json to java object
function parsing(){
    try{
  //let result=JSON.parse('{"name":"tom"}');
  let result1=JSON.parse('hi json');//here giving the error risky code
  //console.log(result);
  console.log('hello');
  console.log(result1);
    }
    catch(error){
  console.log(error);
    }
    }
parsing();
console.log('done');//cannot be printed


function m1():never{
    throw new Error('some eror');
}
m1();