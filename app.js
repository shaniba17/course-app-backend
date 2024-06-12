const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { coursemodel } = require("./models/course")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://shanibatm17:shaniba17tm@cluster0.h4a3e.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>
{   
    let input=req.body
    let course=new coursemodel(input)
    course.save()
    res.send({"status":"success"})
})

app.get("/search",(req,res)=>
{
    let input=req.body
    coursemodel.find(input).then(
        (data)=>res.json(data)
    ).catch(
        (error)=>res.json(error)
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response)=>
            {
                res.json({"status":"success"})
            }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})
app.get("/view",(req,res)=>
{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>
{
    console.log("server started")
})