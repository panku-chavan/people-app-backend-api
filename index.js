const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const app=require('./src/app');
const port=process.env.port || 5000;

mongoose.set('strictQuery', false); 

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//const Database_url='mongodb://127.0.0.1:27017/peoples';
const Database_url=process.env.DATABASE_URI;

mongoose.connect(Database_url,{useNewUrlParser: true,useUnifiedTopology: true });

const db=mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log("Connected to database"));


app.listen(port,()=>{
    console.log("App listening on port",port);
})
