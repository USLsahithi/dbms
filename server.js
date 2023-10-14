const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

const url = "mongodb+srv://uslsahithi8:sahi@2004@cluster0.3l5xyjq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(()=>{
    console.log("Database connected!");
});
app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(3500,()=>{
    console.log("server running");
});