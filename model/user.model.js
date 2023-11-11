const mongooose = require("mongoose")


const userSchema = new mongooose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    destination :{type:String,required:true},
    Number_of_travellers :{type:Number,required:true},
    Budget_per_person : {type:Number,required:true},

})

const userModel = mongooose.model("user",userSchema)


module.exports = {
    userModel
}