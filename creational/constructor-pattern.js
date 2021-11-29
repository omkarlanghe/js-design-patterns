/**
 * <<<<< Constructor design pattern >>>>>
 * 
 * As suggessted by the name, the purpose of this pattern is to aid constructor creation.
 * In Javascript, as almost everything is an object, we're most often interested in object creation.
 * 
 * In the below code, we have defined a function/class Person with the attributes name and age.
 * The getDetails() method will pring the name and age of a person.
 * 
 * The syntax is given in 2 formats.
 * 1. Traditional function based syntax.
 * 2. ES6 class based syntax.
 * 
 * Then, we instantiate an object for the class Person by invoking the constructor method using the new keyword and passing attribute values.
 */


//#region Traditional function based syntax

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getDetails = function () {
//         console.log(`${this.name} is ${this.age} years old.`);
//     }
// };

//#endregion

//#region ES6 class based syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getDetails = function () {
            console.log(`${this.name} is ${this.age} years old.`);
        }
    }
};
//#endregion


// Creating new instance of Person.
const new_person = new Person("omkar", "25");
new_person.getDetails();
