const { ObjectId } = require('mongodb');
const mongo=require('../shared/connect')


module.exports.getRoom= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('room').find({}).toArray();
        res.send(data)
        // console.log("Get Module")
      //  console.log(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports.createRoom= async(req,res,next)=>{
    try{
        var data=await mongo.selectedDB.collection('room').insertOne(req.body);
        res.send(data)
       console.log(data)
        console.log("I m in create Function")
     
    }catch(err){
        console.log(err)
        res.status(500).json(err)
        
    }
}


module.exports.bookRoom= async(req,res,next)=>{
    try{
        var data=await mongo.selectedDB.collection('room').findOneAndUpdate({_id:ObjectId(req.params.id)},{$set:{...req.body}},{returnNewDocument:true});
       //var data=await mongo.selectedDB.collection('room').findOneAndUpdate({_id:ObjectId(req.params.id)}).toArray();
        res.send(data);
        console.log(data,"checking data")
        
    }catch(err){
        console.log(err)
      res.status(500).json(err)
        
    }
}




module.exports.bookedRoom= async(req,res,next)=>{
    try{
        var data=await mongo.selectedDB.collection('room').find({status:{$ne:""}}).project({
            Room_Name:1,
            status:1,
            CustomerName:1,
            Date : 1,
            EndTime : 1,
            StartTime : 1}).toArray();
        res.send(data)
       console.log(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
        
    }
}



module.exports.customerList= async(req,res,next)=>{
    try{
        var data=await mongo.selectedDB.collection('room').find({status:{$ne:""}}).project({
            Room_Name:1,
            CustomerName:1,
            Date : 1,
            EndTime : 1,
            StartTime : 1,
            _id:0
            }).toArray();
        res.send(data)
        console.log("I m in booked_Customers")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
        
    }
}