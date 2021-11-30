/**
 * <<<<< Module Pattern >>>>>
 *
 * module pattern is another prevalent javascript design pattern for keeping our code clean, seperated
 * and organized. A module is a piece of self-contained code that can be updated without affecting
 * other components. As the concept of access modifiers is not supported in javascript, the modules
 * helps in mimicking the behaviour of private/public access hence providing encapsulation.
 * 
 * Here we have the flexibility of renaming like we have renamed addAnimal to add. A point to be 
 * noted is that we can't invoke removeAnimal from an outside environment as it is dependent on the
 * private property contained.
 * 
 */

function AnimalContainer() {
    // private variable and/or functions
    const container = [];

    function addAnimal(name) {
        container.push(name);
    }

    function getAllAnimals() {
        return container;
    }

    function removeAnimal(name) {
        const index = container.indexOf(name);
        if (index < 1) {
            throw new Error("Animal not found in container");
        }
        container.splice(index, 1);
    }

    return {
        // public variables and/or functions
        "add": addAnimal,
        "get": getAllAnimals,
        "remove": removeAnimal
    }
}

const container = AnimalContainer();
container.add("Hen");
container.add("Goat");
container.add("Sheep");

console.log(container.get());
container.remove("Sheep");
console.log(container.get());
