const express = require("express");
const bodyparser=require("body-parser");
const path = require('path');

const app =express();
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")

});








let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function(){
    console.log("server is running");
})


