const express=require("express");
const router=express.Router();
const tasks =require("../controllers/controller")


router.route("/fetch").get(tasks.getAllTAsks);
router.route("/create").post(tasks.createPost);


module.exports=router;