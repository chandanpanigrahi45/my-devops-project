require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.json({
        massage:"nodejs server is running",
        status:"success"
    });
});

app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"healthy",
        uptime:process.uptime
    });
});

app.get("/api/users",(req,res)=>{
    res.json([
        {id:1 , name:"chandan"},
        {id:2 , name:"rahul"},
        {id:3 , name:"mohit"}
    ]);
});




if(require.main === module){
    app.listen(PORT,()=>{
    console.log("server is running");
    
})
}

module.exports = app;