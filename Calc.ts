export let page:String="Welcome"

 function add()
{
    console.log("add function")
}
 function sub()
{
    console.log("sub functions")
}
export {add as Addition, sub}

//Alias

 export default class LoginPage
{
    doLogin()
    {

    }
}
