const express = require("express")


const app = express();
const PORT = process.env.PORT || 3000;


app.get("/getdata",(req,res)=>{
    console.log("in /getdata ")
    res.send({data : "in getdata"})

})
console.log("PORT ",PORT)
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);

})