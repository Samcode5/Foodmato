const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')


const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// connecting to database
mongoose.connect('mongodb://0.0.0.0:27017/Foodmato').then(()=>{
    console.log("Connected to MongoDb");
}).catch((err) => console.log(err));

const userSchema= mongoose.Schema({
    name:String,
    password:String,
})

//model for database
const user= new mongoose.model("user",userSchema);




app.get("/",function(req,res){
    res.send("Backend working");
})

// save signup data
app.post("/",function(req,res){
    const newUser= new user({
        name:req.body.name,
        password:req.body.password
    })

    newUser.save();
    
})

app.post("/login",function(req,res){
    user.find({name:req.body.name}).then((foundUser)=>{
        if(foundUser.password==req.body.password)
        {
                console.log(foundUser.password);
               
        }
        else
        {
            console.log(foundUser.password);
            console.warn("Wrong password");
        }
    })

    
})

app.listen(8000,function(req,res){
    console.log('server working on port 8000');
})

