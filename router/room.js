var express=require("express")
const router=express.Router();
var  roomModule=require("../module/room");

router.get('/',roomModule.getRoom)
router.post('/create',roomModule.createRoom)
router.patch('/bookroom/:id',roomModule.bookRoom)   //// for update and find , use Get Method
router.get('/bookedroom',roomModule.bookedRoom)
router.get('/customerlist',roomModule.customerList)



module.exports=router;