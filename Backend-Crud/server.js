const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const userRoutes=require('./routes/userRoutes')
require("dotenv").config();
const app=express();
const PORT=3000;
//Middleware
app.use(cors());
app.use(bodyParser.json());
//Routes
app.use("/apiUser",userRoutes)

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("connected to mongodb")
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.error('connection error',error.message)
})



app.get("/",(req,res)=>{
    res.json(displayName("bharani","shanmugavel"))
});


const displayName=(firstName,lastName)=>{
    return `hey, ${firstName} ${lastName} !!!`
};