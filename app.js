const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>
{
    res.send("hii")
})

app.get("/view",(req,res)=>
{
    res.send("hello")
})

app.listen(8080,()=>
{
    console.log("server started")
})