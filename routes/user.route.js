const express = require("express")

const {userModel} = require("../model/user.model")



const userRouter = express.Router()

userRouter.post("/Post",async(req,res)=>{
    try{
        const {name,email,destination,Number_of_travellers,Budget_per_person} = req.body
        const newUser = new userModel({
            name,
            email,
            destination,
            Number_of_travellers,
            Budget_per_person
        });
        await newUser.save()
        res.status(201).json({msg:"user data posted sucesffuly!!"})

    }
    catch(err){
        console.log(err)
        res.status(502).json({msg:"User data cannot be posted"})
    }
})

userRouter.get("/retrive",async(req,res)=>{
    try{
        const data = await userModel.find()
        res.status(200).json({msg:"all the users are here",data})

    }
    catch(err){
        console.log(err)
        res.status(501).json("cannot get the users")
    }
})

userRouter.delete("/delete/:id",async(req,res)=>{
    try{
        const data = await userModel.findByIdAndDelete(req.params.id)
        if (!data){
            res.status(502).json({msg:"something went wrong"})
        }
        res.status(201).json({msg:"user deleted Sucessfullyy"})

    }
    catch(err){
        console.log(err)
        res.status(501).json("something went wrong")
    }
})

userRouter.get("/filter/:destination",async(req,res)=>{
    try{
        const data = await userModel.find({destination:req.params.destination})
        res.status(201).json({msg:"user Destinations here"})

    }
    catch(err){
        console.log(err)
        res.status(501).json("something went wrong")
    }
})


userRouter.get('/sort/:destination', async (req, res) => {
    try {
      let trips;
      if (req.query.sort) {
        trips = await userModel.find({ destination: req.params.destination }).sort({
          [req.query.sort]: 1, 
        });
      } else {
        trips = await userModel.find({ destination: req.params.destination });
      }
      res.send(trips);
    } catch (error) {
      res.status(500).send(error);
    }
  });




module.exports = {
    userRouter
}