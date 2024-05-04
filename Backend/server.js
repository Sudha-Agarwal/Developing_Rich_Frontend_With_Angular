const express = require('express'); //importing express library
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');


const app = express(); //creates an express application
 app.use(bodyParser.json()); //to parse JSON request bodies
app.use(cors()); //enables cors for all routes

const secretKey = '1234';

//sample data for products
const products = [
    {id:1, name:'Product1',description:'Description1', category:'Mobile'},
    {id:2, name:'Product2', description:'Description2', category:'Mobile'}
]

const users = [{email:'sudha@gmail.com', password:'123456'}];

 //API to handle incoming request

 app.post('/login', (req,res)=>{
    const {email, password} = req.body;
    console.log(`${email} ${password}`);

    const user = users.find(user=>user.email===email && user.password===password)
    if(user){
      const payload = {
         email: user.email,
         iat: Math.floor(Date.now() / 1000),
         role: 'user',
     };
     const token = jwt.sign(payload,secretKey);
     res.status(200).json({message:'Login successful', token:token});
    }
    else{
      res.status(401).json({message:'Invalid credentials'});
    }    
 });

 //middleware for authentication
 app.use((req,res,next)=>{
   const token = req.header('Authorization');

   if(!token){
      return res.status(401).send("Access denied.no token provided")
   }
   try{
      const decoded = jwt.verify(token,secretKey,{});
      req.user = decoded;
      console.log(req.user);
      next();
   }
   catch(er){
      res.status(404).send('Invalid token')
   }
 })
 app.get('/products', (req,res)=>{
   console.log("Req after authentication: " +req.user.role);
    if(products.length ===0){
        res.status(404).json({message:'No data Found for the products'})
    }
    else{
      res.status(200).json(products);

    }
   
 })

 /*user = {
  name:'Sudha',
  addresses:[{
    address1: 'gf',
    address2 : 'dfg'
  }   
  ]
 }

 const addresses1 = req.body.addresses[0].address1*/

 app.post('/products',(req,res)=>{
   const newproduct = req.body;
   const lastProductId = products.length >0 ? products[products.length-1].id :0;

   const newproductId = lastProductId + 1;
   const productWithId = {...newproduct, id:newproductId};
   products.push(productWithId);
   return res.status(201).json(productWithId);
 })

 app.put('/products', (req,res)=>{
   const productId = parseInt(req.body.id);//from request

   const productToUpdate = products.find(product=> product.id===productId)

   if(!productToUpdate){
      return res.status(404).json({error:"Product Not Found"})
   }

   if(req.body.name){
      productToUpdate.name = req.body.name
   }
   if(req.body.description){
      productToUpdate.description = req.body.description;
   }

   return res.status(200).json({message:'Product updated successfully', product:productToUpdate})


 })

 app.delete('/products/:id',(req,res)=>{
   const productId = parseInt(req.params.id); // Convert productId to a number
   console.log(productId);
   // Find the index of the product with the specified ID in the products array
   const index = products.findIndex(product => product.id === productId);
 console.log(index)
   // If the product with the specified ID exists, remove it from the products array
   if (index !== -1) {
     products.splice(index, 1);
     return res.status(200).json({ message: 'Product deleted successfully' });
   } else {
     // If the product with the specified ID doesn't exist, return a 404 Not Found response
     return res.status(404).json({ error: 'Product not found' });
   }


 })






 //starts an express server
 app.listen(3000, ()=>{
    console.log('server is listening at port 3000')
 })

