const express=require('express')
const router=express.Router()
const {createCourse,getCourse,getCourseById,deleteCourse,updateCourse}=require('../controllers/courseController')

router.use('/create',createCourse)
router.use('/get',getCourse)
router.use('/getById/:id', getCourseById)
router.use('/updateById/:id', updateCourse)
router.use('/deleteById/:id', deleteCourse)

module.exports=router