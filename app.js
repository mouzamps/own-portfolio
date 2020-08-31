const express = require("express");
const bodyparser=require("body-parser");
const path = require('path');

const app =express();
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")

});











app.listen(3000, function(){
    console.log("server is running");
})


