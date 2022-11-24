let {Schema,model} = require("mongoose")



let dataSchema = new Schema({
    file:{type:String,required:true}
})



module.exports=model("data",dataSchema)