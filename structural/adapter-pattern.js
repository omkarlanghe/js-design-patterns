/**
 * <<<<< Adapter Pattern >>>>>
 * 
 * The adapter is a structural JS design pattern that allows objects or classes with incomatible interfaces to collaborate.
 * It matches interfaces of different classes or objects; therefore, they can work together despite incompatible interfaces.
 * It is also referred to as the Wrapper pattern.
 * 
 * The below code shows an online flight ticket pricing calculation system. There is an old interface that performs pricing 
 * calculations in one way. There is a new, improved interface with additional features like user identification and improvised calculations.
 * 
 * An adapter class is introduced, which allows the client program to continue working without any API changes by matching the old
 * interface with new one. 
 */

//#region old interface
function TicketPrice() {
    this.request = function (start, end, overweight_luggage) {
        // price calculation code ..
        return "$150.34";
    }
};
//#endregion

//#region new interface
function NewTicketPrice() {
    this.login = function (crendetials) { /** process credentials */ };
    this.setStart = function (start) { /** set start point */ };
    this.setDestination = function (destination) { /**set destination point */ };
    this.calculate = function (overweight_luggage) {
        // price calculation code ..
        return "$120.20";
    }
};
//#endregion

//#region adapter interface
function TicketAdapter(credentials) {
    let pricing = new NewTicketPrice();
    pricing.login(credentials);

    return {
        request: function (start, end, overweight_luggage) {
            pricing.setStart(start);
            pricing.setDestination(end);
            return pricing.calculate(overweight_luggage);
        }
    }
};
//#endregion

let pricing = new TicketPrice();
let credentials = { "token": "30a5-9ree3" };
let adapter = new TicketAdapter(credentials);

// original ticket pricing and interface
let price = pricing.request("Pune", "Bengaluru", 20);
console.log("Old price : ", price);

// new ticket pricing with adapted interface
price = adapter.request("Pune", "Bengaluru", 20);
console.log("New price : ", price);
