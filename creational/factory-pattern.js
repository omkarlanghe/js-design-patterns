/**
 * <<<<< Factory Pattern >>>>>
 *
 * The Factory pattern is another creational pattern concerned with creating objects but using some sort of generic interface.
 * This pattern is typically used when we need to handle object groups that share similar characterstics yet are different
 * through approporate custom calls.
 *
 * Note : Though the defination particularly mentions that an interface needs to be defined, we don't have interfaces in
 * Javascript. Therefore, we are going to implement it using an alternative way.
 *
 * Here, the shapeFactory constructor is responsible for creating new objects of the constructors Rectangle, Square and Circle.
 * The createShape() inside shapeFactory takes in parameters, depending on which it delegates the responsibility of objects instantiation
 * to the respsective class.
 *
 * Output of below code:
 *  Rectangle invoked.
 *  Square invoked.
 *  Circle invoked.
 */

//#region Constructor for defining new Rectangle
let Rectangle = function () {
    this.draw = () => { console.log("Rectangle invoked."); }
};
//#endregion

//#region Constructor for defining new Square
let Square = function () {
    this.draw = () => { console.log("Square invoked."); }
};
//#endregion

//#region Constructor for defininf new Circle.
let Circle = function () {
    this.draw = () => { console.log("Circle invoked."); }
};
//#endregion

//#region Factory method for creating new shape instances
function shapeFactory() {
    this.createShape = (shape_type) => {
        let shape;
        switch (shape_type) {
            case "rectangle":
                shape = new Rectangle();
                break;
            case "square":
                shape = new Square();
                break;
            case "circle":
                shape = new Circle();
                break;
        }
        return (shape);
    }
};
//#endregion

let factory = new shapeFactory();
let rectangle = factory.createShape("rectangle");
let square = factory.createShape("square");
let circle = factory.createShape("circle");

rectangle.draw();
square.draw();
circle.draw();
