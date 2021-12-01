/**
 * <<<<< Decorator pattern >>>>>
 * 
 * Decorators are a structural JS design pattern that aims to promote code reuse. This pattern allows
 * behavior to be added to an individual object dynamically, without affecting the behaviour of other
 * objects from the same class. Decorators can also provide a flexible alternative to subclassing for
 * extending functionality.
 * 
 * Since javascript allows us to add methods and properties to objects dynamically, implementing this
 * javascript pattern is a very straigtforward process.
 * 
 */

function Vehicle(vehicle_type) {
    this.vehicleType = vehicle_type || "car";
    this.model = "default";
    this.license = "00000-0000";
};

let test_instances = new Vehicle("car");
console.log(test_instances);

let truck = new Vehicle("truck");

truck.setModel = function (model_name) {
    this.model = model_name;
};

truck.setColor = function (color) {
    this.color = color;
};

truck.setModel("CAT");
truck.setColor("Blue");

console.log(truck);

let secondInstance = new Vehicle("car");
console.log(secondInstance);
