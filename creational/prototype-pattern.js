/**
 * <<<<< Prototype Pattern >>>>>
 *
 * An object that supports cloning is called prototype. Using the prototype pattern, we can instantiate new
 * objects based on a template of an existing object through cloning.
 *
 * As the prototype pattern is based on prototypal inheritance, we can utilize the native prototypical strengths
 * of Javascript.
 *
 * Here we have a prototype class car, which is cloned to create a new object myCar using Object.create feature
 * defined by ES5 standard.
 *
 */

//#region Prototype class
const car = {
    no_of_wheels: 4,
    start() {
        return "started ...";
    },
    stop() {
        return "stopped !!!";
    }
};
//#endregion

//#region Using Object.create to create clones - as recommended by ES5 standard
const my_car = Object.create(car, { owner: { "value": "Omkar" } });
console.log(my_car.__proto__ === car);
//#endregion
