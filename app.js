const express =require("express")
const app = express()

app.get("/api/v1/get",(req,res)=>{
    res.send({message:"Hello World"})
})
console.log("Server on");
app.listen(3000)