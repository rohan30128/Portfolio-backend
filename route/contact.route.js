const { Router} = require("express");
const Contact = require("../model/contact");
const sendMail = require("../controller/mail");

const router = Router();

router.post("/",async (req,res)=>{
    const {name,email,number,subject,message} = req.body;

    const contact = await Contact.create({
        name,email,number,subject,message
    });
    sendMail(email,name,subject);

    return res.json({message :"Send Successfully"});
})

module.exports =  router