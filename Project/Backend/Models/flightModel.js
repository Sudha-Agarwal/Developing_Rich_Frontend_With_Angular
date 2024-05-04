class Flight {
    constructor(source, destination, dateOfTravel, numberOfAdults, numberOfChildren, travelClass, price) {
        this._source = source;
        this._destination = destination;
        this._dateOfTravel = dateOfTravel;
        this._numberOfAdults = numberOfAdults;
        this._numberOfChildren = numberOfChildren;
        this._travelClass = travelClass;
        this._price = price;
    }

    get source() {
        return this._source;
    }

    set source(source) {
        this._source = source;
    }

    get destination() {
        return this._destination;
    }

    set destination(destination) {
        this._destination = destination;
    }

    get dateOfTravel() {
        return this._dateOfTravel;
    }

    set dateOfTravel(date) {
        this._dateOfTravel = date;
    }

    get numberOfAdults() {
        return this._numberOfAdults;
    }

    set numberOfAdults(adults) {
        this._numberOfAdults = adults;
    }

    get numberOfChildren() {
        return this._numberOfChildren;
    }

    set numberOfChildren(children) {
        this._numberOfChildren = children;
    }

    get travelClass() {
        return this._travelClass;
    }

    set travelClass(travelClass) {
        this._travelClass = travelClass;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }
}

module.exports = Flight;


