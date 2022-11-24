let express = require("express")

let router = express.Router()

let Data=require("../models/data.model")


router.post("/",async(req,res)=>{
   try{
let newfile = await Data.create({
    file:req.file.path
})

res.status(201).send({file:newfile,error:false})
   }catch(e){
res.send({error:true,message:e.message})
   }
})



module.exports = router