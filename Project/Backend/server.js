const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');

//const Flight = require('./Models/flightModel');
const FlightDetails = require('./Models/flightDetail');
const FlightManager = require('./Models/FlightManager')
//const Booking = require('./Models/Booking');

const app = express();

app.use(cors());


app.use(bodyParser.json());
class User{
  firstName;
  lastName;
  email;
  password;
  address1;
  address2;
  city;
  state;
  zip;

  constructor(firstName, lastName, email, password, address1,
    address2,
    city,
    state,
    zip){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zip = zip
  }
}
const users = [];

app.post('/createUser', (req, res) => {
  const { firstName, lastName, email, password, address1, address2, city, state, zip } = req.body;

  // Create a new user with the provided data
  //const user = user.find((user) => user.username === username && user.password === password);
  const newUser = new User(firstName,lastName,email,password, address1, address2, city,state,zip);
  users.push(newUser);
  res.status(200).json({ message: 'User registered successfully' });
 });

app.post('/login', (req, res) => {
  const { _email, _password } = req.body;
  //console.log("login" + _email)

  // Find the user with the provided credentials
  const user = users.find((user) => user.email === _email && user.password === _password);
  console.log(user)
  if (user) {
    console.log(user)
    // Create a payload object with user data    
      const payload = {
        email: user.email,
        iat: Math.floor(Date.now() / 1000),
        role: 'user',
    };
    const token = jwt.sign(payload,'123');
    res.status(200).json({ message: 'Login successful', token:token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware for authentication
app.use((req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);  
  if (!token) return res.status(401).send('Access denied. No token provided.');
  try {

    const decoded = jwt.verify(token,'123');
    req.user = decoded;
    console.log("decoded" + decoded);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
});
// Endpoint to provide flight source and destination data
app.get('/flights', (req, res) => {
  req.body.user.email;

    console.log("flights");
    let flightDetails = new FlightDetails();

    console.log(flightDetails.routePrices);
    res.json(flightDetails.routePrices);
});

// POST endpoint to handle user input
app.post('/flights', (req, res) => {
    const {
      source,
      destination,
      dateOfTravel,
      numberOfAdults,
      numberOfChildren,
      travelClass
    } = req.body;

 let flightManager = new FlightManager();
    const totalPrice = flightManager.calculatePrice(source,destination,numberOfAdults,numberOfChildren,dateOfTravel);    
    if(typeof totalPrice == 'number'){
        res.status(200).json({ totalPrice: totalPrice});
    }
    else{
        res.status(404).json(totalPrice);
    }   
  });

  app.post('/createBooking', (req,res) =>{  

    // Load existing data from the file, if any
    let existingData = [];
    try {
        const data = fs.readFileSync('data.json');
        existingData = JSON.parse(data);
    } catch (err) {
        // File doesn't exist or couldn't be read; an empty array will be used
    }

    // Push the new data into the existing array
    existingData.push(req.body);

    // Write the updated data back to the file
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

    res.send({message:'Booking created successfully!'});

  })
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

