const express=require('express')
const router=express.Router()
const authorRouter=require('./authorRoutes')
const authRouter=require('./authRoutes')
const articleRouter=require('./articleRoutes')
const courseRouter=require('./courseRoutes')


router.use('/author',authorRouter)
router.use('/auth',authRouter)
router.use('/article',articleRouter)
router.use('/course',courseRouter)

module.exports=router