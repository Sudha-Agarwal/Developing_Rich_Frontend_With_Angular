interface Passenger {   
    name:string;
    age: number;
}  

interface FlightDetails {
    source: string;
    destination: string;
    date: Date;    
}

export class Booking {
    customerEmail: string;
    totalPrice: number;   
    flightDetails: FlightDetails;
    passengers: Passenger[];   
    constructor(customerEmail: string, totalPrice: number, flightDetails: FlightDetails,passengers: Passenger[]) {
        this.customerEmail = customerEmail;
        this.totalPrice = totalPrice;    
        this.flightDetails = flightDetails;   
        this.passengers = passengers;
    }
}