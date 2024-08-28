const express = require("express");
const router = express.Router();




//post
//Index 
router.get("/", (req, res)=>{
    res.send("GET for posts");
});
//Show 
router.get("/:id", (req, res)=>{
    res.send("GET for show posts id");
});

//Post 
router.post("/", (req, res)=>{
    res.send("POST for  posts");
});

//delete  
router.delete("/:id", (req, res)=>{
    res.send("DELETE for  posts id");
});

module.exports = router;