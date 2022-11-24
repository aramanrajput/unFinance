let express = require("express")
let User = require("../models/user.model")
let router = express.Router()

let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")
router.post("/register",async(req,res)=>{
try{

    //find if user exist or not
let user = await User.findOne({email:req.body.email})
console.log(user)
//if user already exist throw an error
if(user)return res.send({error:true,message:"User already exists try using diffrent credentials"})


//else create a newuser but hash the password before saving it in db
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body?.password, salt);
 //bcrypt.hashSync(payload,salt)

let hashedpassword = hash

let newUser = await User.create({
    username:req.body.username,
    email:req.body.email,
    password:hashedpassword
})

return res.status(201).send({error:false,data:newUser,message:"user created"})

}catch(e){
    return res.send({error:true,message:e.message})
}
})


router.post("/login",async(req,res)=>{
    try{
    //check if user with the provided credentials exists in db or not 

    let user =await User.findOne({email:req.body?.email})
    console.log(user,"user")
//if user is doesn't exist throw an error
    if(!user) return res.send({error:true,message:"Invalid credentials"})

    //if user exist match the password
console.log(req.body.password,user)
    let match =bcrypt.compareSync(req.body?.password,user.password);
//if password doesn't match throw an error

    if(!match)return res.send({error:true,message:"please check your password and email"})

//else generate a token and send to frontend along with user
    var token = jwt.sign({user}, 'secret');



    return res.send({error:false,data:{user,token},message:"logged in successfully"})
    }catch(e){
        return res.send({error:true,message:e.message})
    }

 
})

module.exports =router