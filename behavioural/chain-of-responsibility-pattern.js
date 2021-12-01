/**
 * <<<<< Chain of responsibilty pattern >>>>>
 *
 * This is a behavioural javascript design pattern that creates a chain of receiver objects for a request. This pattern promotes loose
 * coupling. We can avoid coupling the sender of a request to a receiver, and more than one receiver can handle the request.
 *
 * The receiving objects will be linkied together, and they can choose to act on the request and/or pass it to the next receiver object.
 * It is also easy to add new receiver objects to the chain.
 *
 * Event handling in DOM is one implementation of the Chain of Responsibility pattern.
 *
 * Once, an event is fired, it propogates through the DOM hierarchy, calling every event handler it runs into
 * until it finds the appropriate "event listner" and then acts on it.
 *
 * Example :
 * Let us consider the scenario of an ATM. When we request an amount for withdrawl,
 * the machine processes the request and dispends the amount as combinations of available note denomitations ($100, $50, $20, $10, $5, $1)
 *
 * The below code on requesting an amount,  a request object is created. This object then invokes a series of get calls,
 * which are chained together, each one handing a particular denomination. Finally, the user receives the amount as a note combination
 * which satisfies the amount value.
 *
 */

let Request = function (amount) {
    this.amount = amount;
    console.log("Request Amount : ", this.amount);
};

Request.prototype = {
    get: function (bill) {
        let count = Math.floor(this.amount / bill);
        console.log("Dispense " + count + " $" + bill + " bills");
        return this;
    }
};

function run() {
    let request = new Request(378); // Requesting amount
    request.get(100).get(50).get(20).get(10).get(5).get(1);
};

run();