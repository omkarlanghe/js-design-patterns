/**
 * <<<<< Singleton design pattern >>>>>
 * 
 * The singleton pattern is a creational Javascript design pattern that restricts the instantiation of a class
 * to a single object. It creates a new instance of the class if one doesn't exist and if existing already, it
 * simply returns a reference to it. It is also known as the Strict Pattern.
 * 
 * A singleton pattern solves two problems at the same time:
 *  - gaurantees that there is only a single instance of class
 *  - provide a global access point to this instance.
 * 
 * A practical example would be a single database object shared by different parts of the program. There is no
 * need to create a new instance of a database when one is already existing.
 * 
 * Output:
 * Same instance ? true
 * 
 */

//#region Singleton class
let Singleton = (function () {
    let instance;

    function createDBInstance() {
        let object = new Object("I am the database instance");
        return object;
    }

    return {
        getDBInstance: function () {
            if (!instance) { instance = createDBInstance(); }
            return instance;
        }
    }
})();
//#endregion

function run() {
    let instance_1 = Singleton.getDBInstance();
    let instance_2 = Singleton.getDBInstance();

    console.log("Same instance ? " + (instance_1 == instance_2));
};

run();
