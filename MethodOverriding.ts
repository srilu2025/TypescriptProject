/**Scenario: Method Overriding – Redefining a method in a subclass
Given a base class "Shape" with a method "draw"

And a class "Circle" that overrides the "draw" method

When calling "draw()" from a "Circle" object

Then the output should be "Drawing a circle"

And calling "draw()" from a "Shape" object should print "Drawing a shape" */

class Shape{
    draw():void{
        console.log("Drawing a shape");
    }
}
class Circle extends Shape{
    draw():void{
        console.log("Drawing a circle");
    }
}
const shape=new Shape();
shape.draw();

const circle=new Circle();
circle.draw();

const shapeRef:Shape=new Circle();
shapeRef.draw();