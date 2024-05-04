import { Component, Input } from '@angular/core';
import { Booking } from 'src/app/_models/booking';
import { Flight } from 'src/app/_models/flight.model';
import { FlightDataService } from 'src/app/_services/flight-data.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent {
  @Input() flightDetails: Flight | undefined; // Receive flight details from parent component
  showPassengerDetailsForm = false; // Initially hide the form
  passengers: any[] = []; // Array to store passenger details
  showGeneratePdfButton:boolean = false;
  booking:Booking;

  constructor(private flightService:FlightDataService){}

  openPassengerDetailsForm() {
    // Generate input boxes for each passenger
    let numberOfPassengers =  this.flightDetails.numberOfAdults + this.flightDetails.numberOfChildren;
    for (let i = 0; i < numberOfPassengers; i++) {
        this.passengers.push({ name: ''}); // Add more properties as needed for each passenger
    }

    this.showPassengerDetailsForm = true; // Display the passenger details form
}

submitPassengerDetails() {
  // Handle submitted passenger details
  console.log('Submitted passenger details:', this.passengers);
  this.booking = new Booking(
    "sudha@gmail.com",
    this.flightDetails.price,
    {source:this.flightDetails.source,destination:this.flightDetails.destination,date:this.flightDetails.dateOfTravel},
    this.passengers
  );

  console.log(this.booking);

  this.flightService.createBooking(this.booking).subscribe({
    next:(response:any)=>{alert(response.message);
      this.showGeneratePdfButton = true;
    },
    error:err=>console.log(err)
  })
  // You can send this data to your backend or perform required actions
}

generatePDF() {
 // Assuming `Booking` is a class with properties like email, price, flightDetails, and passengers

// Convert flight details object to a string
const flightDetailsStr = `${this.booking.flightDetails.source} - ${this.booking.flightDetails.destination}, ${this.booking.flightDetails.date}`;

// Convert passengers array to a string
const passengersStr = this.booking.passengers.map(passenger => `${passenger.name}, ${passenger.age}`).join('\n');

// Create a new jsPDF instance
const doc = new jsPDF();

// Add table header
const tableHeader = [['Email', 'Price', 'Flight Details(Destination-Source) Date', 'Passengers - Age']];
const tableData = [[this.booking.customerEmail, this.booking.totalPrice, flightDetailsStr, passengersStr]];

// Add table to the document
(doc as any).autoTable({
  head: tableHeader,
  body: tableData,
});

// Save the document
doc.save('booking_details.pdf');
}
}
