class Passenger {   
    name;
    age;
}  

class FlightDetails {
    source;
    destination;
    date;    
}

class Booking {
    constructor(customerEmail, totalPrice, flightDetails, passengers) {
        this.customerEmail = customerEmail;
        this.totalPrice = totalPrice;      
        this.flightDetails = flightDetails; 
        this.passengers = passengers;
    } 
}

module.exports = Booking;