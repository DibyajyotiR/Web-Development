//studentController imported here only
const studentController=require('../controllers/studentController')
const express = require('express'); //express drkr routes create kriba pain
const router=express.Router() //router create kriba pain
          


//createStudent is a route 

router.post("/create",studentController.createStudent)
router.get("/get",studentController.getStudents)

module.exports=router