const express=require('express');
const app=express.Router();
const path = require("path");
const product=require('../models/products.js');

app.get('/',(req,res)=>{
  console.log(6);
  res.sendFile(path.join(__dirname, '../../Frontend/dist/index.html'));
});

app.get('/home',(req,res)=>{
  console.log(6);
  res.sendFile(path.join(__dirname, '../../Frontend/dist/index.html'));
});

app.get('/viewcart',(req,res)=>{
  console.log(6);
  res.sendFile(path.join(__dirname, '../../Frontend/dist/index.html'));
});

app.get('/getallproducts', async (req, res,next) => {
  try{
  const result = await product.find();

  res.json(result);
  }
  catch(err){
  
  }
});




module.exports=app;