/**
 * The observer is a behavioural JS desing pattern that lets you define a subscription mechanism to notify
 * multuple objects (observers) about any events that happen to the object they are observing. This pattern
 * is also called as Pub/Sub (publisher / subscriber). It defines a one to many dependency between objects,
 * promotes loose coupling and facilitates good object oriented design.
 * 
 * The observer pattern is a foundation of event driven programming. We write event handler functions
 * that will be notified when a certain event fires.
 * 
 */

function Click() {
    this.observers = [];
};

Click.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
    fire: function (o, this_obj) {
        let scope = this_obj;
        this.observers.forEach(function (item) {
            item.call(scope, o);
        });
    }
};

function run() {
    let clickHandler = function (item) {
        console.log("Fired:" + item);
    };

    let click = new Click();

    click.subscribe(clickHandler);
    click.fire("event #1");
    click.unsubscribe(clickHandler);
    click.fire("event #2");
    click.subscribe(clickHandler);
    click.fire("event #3");
};

run();

