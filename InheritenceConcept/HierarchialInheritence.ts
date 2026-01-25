/**Scenario: Demonstrating Hierarchical Inheritance
Given a class "Account" with a method "login"

And a class "Admin" that extends "Account" with a method "manageUsers"

And a class "User" that extends "Account" with a method "browse"

When an object of "Admin" is created

Then calling "login" should print "Account logged in"

And calling "manageUsers" should print "Managing users"

When an object of "User" is created

Then calling "login" should print "Account logged in"

And calling "browse" should print "Browsing content" */

class Account{
    login():void{
        console.log("Account logged in");
    }
}
class Admin extends Account{
     manageUsers():void{
        console.log("Managing users");
     }
}
class User extends Account{
    browser():void{
        console.log("Browsing content");
    }
}

let admin=new Admin();
admin.login();
admin.manageUsers();
let user=new User();
user.login();
user.browser();