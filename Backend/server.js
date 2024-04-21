const express = require('express'); //importing express library
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); //creates an express application
 app.use(bodyParser.json()); //to parse JSON request bodies
app.use(cors()); //enables cors for all routes

//sample data for products
const products = [
    {sku:1, description:'Description1', category:'Mobile'},
    {sku:2, name:'Product2', description:'Description2', category:'Mobile'}
]
 //API to handle incoming request

 app.post('/login', (req,res)=>{
    const {email, password} = req.body;
    console.log(`${email} ${password}`);
    
    res.status(200).json({message:'Login unsuccessful'});
 });

 //middleware for authentication
 
 app.get('/products', (req,res)=>{
    if(products.length ===0){
        res.status(404).json({message:'No data Found'})
    }
    res.status(200).json(products);
 })




 //starts an express server
 app.listen(3000, ()=>{
    console.log('server is listening at port 3000')
 })

