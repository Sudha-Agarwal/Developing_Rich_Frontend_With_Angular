class FlightDetails {
    constructor() {
        this.routePrices = [
            { route: 'New York-London', price: 200,
            availableDates: ['2023-11-01', '2023-11-05'] },
            { route: 'London-Paris', price: 180 },
            { route: 'default', price: 150 } // Default price
            // Add more routes as needed
        ];
    }

    getBasePrice(source, destination,date) {
        const route = `${source}-${destination}`;
        const foundRoute = this.routePrices.find(r => r.route === route && r.availableDates.includes(date));

        if(foundRoute){
            return foundRoute.price
        }
        else{
            return "No Flight available for the specified route"
        }
        return foundRoute ? foundRoute.price : this.routePrices.find(r => r.route === 'default').price;
    }
}

module.exports = FlightDetails;