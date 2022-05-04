const express=require("express")
const mongo=require('./shared/connect')
const roomRouter=require("./router/room")
const app=express();
app.use(express.json());
mongo.connect();

// app.use('/',(req,res,next)=>{
//     console.log("Midware1")
//     next();
// })


app.use('/', roomRouter)

// app.use("/room",(req,res,next)=>{
//     res.send({msg:"Room path"})
//     console.log("I m in room")
//     next();
    
// })

app.listen(process.env.PORT || 4000);

/////Note: for  a specific program only one res.send() can be given. not in all app.usegit 