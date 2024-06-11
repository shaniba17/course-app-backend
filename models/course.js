const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "courseTitle":String,
        "courseDescription":String,
        "courseDate":String,
        "duration":String,
        "venue":String,
        "trainerName":String
    }
)

let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}