const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const contactRouter = require("./route/contact.route");

const app = express();
const PORT = process.env.PORT || 6000;
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODBURL).then(()=> console.log("MongoDB connected Successfully")).catch((error)=>console.log("Error on MongoDb",error));

app.use("/contact",contactRouter);
app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT,()=> console.log(`Server runnig at port ${PORT}`));