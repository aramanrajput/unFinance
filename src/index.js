let express = require("express")
let userController = require("./controllers/user.controller")
let app = express()
let dataController = require("./controllers/data.controller")
let connect = require("./config/db")

let upload = require("./middlewares/upload")

app.use(express.json())
app.use("/user",userController)
app.use("/store",upload.single("file"),dataController)



let Port = process.env.PORT||8080 

app.listen(Port,async()=>{
await connect()
console.log("server is running on port 8080")
})