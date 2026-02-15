const dataController=require('../controllers/dataController')
const express=require('express')
const router=express.Router()


router.use('/create',dataController.createData)
router.use('/getData',dataController.getData)
router.use('/getById/:id',dataController.getById)
router.use('/updateData/:id',dataController.updateData)
router.use('/deleteData/:id',dataController.deleteData)


module.exports=router