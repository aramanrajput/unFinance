let path = require('path')
let multer =require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,   uniquePrefix+ file.fieldname )
    }
  })


  var upload= multer({
    storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=="text/csv"
        ){
            callback(null,true)
        }else{
            console.log("only csv file is supported")
        }
    },
    limits:{
        fileSize:1024*1024*10
    }
  })

module.exports=upload