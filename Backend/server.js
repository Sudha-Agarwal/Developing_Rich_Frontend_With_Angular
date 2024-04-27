const express = require('express'); //importing express library
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express(); //creates an express application
 app.use(bodyParser.json()); //to parse JSON request bodies
app.use(cors()); //enables cors for all routes

//sample data for products
const products = [
    {id:1, name:'Product1',description:'Description1', category:'Mobile'},
    {id:2, name:'Product2', description:'Description2', category:'Mobile'}
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






 //starts an express server
 app.listen(3000, ()=>{
    console.log('server is listening at port 3000')
 })

