const nodemailer= require("nodemailer");

const sendMail = (email,name,subject)=>{
    const transporter =nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : "rohangupta30128@gmail.com",
            pass : "xfqo vadx ijlb coco"
        }
    })

    const mailOption = {
        from : "rohangupta30128@gmail.com",
        to  : email,
        subject : "Your Inquiry",
        html : '<h3>Hi '+name+'</h3> <p>I hope this message finds you well.Thank you for reaching out! I appreciate your interest in contacting me. I wanted to let you know that I will contact you soon to discuss next steps. <br /><br /> <p>Best regards,</p> <p>Rohan Gupta <br /> +918839786863 </p></p>'
    }

    transporter.sendMail(mailOption,(err,res)=>{
        if(!err) console.log("Email send Successfully")
             else console.log("Email not send",err);
    })
};

module.exports = sendMail;