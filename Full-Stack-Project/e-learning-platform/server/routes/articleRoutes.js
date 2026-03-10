const express=require('express')
const router=express.Router()
const{createArticle,updateArticle,deleteArticle,getArticleById,getArticles}=require('../controllers/articleController')

router.use('/create',createArticle)
router.use('/get',getArticles)
router.use('/getById/:id',getArticleById)
router.use('/update/:id',updateArticle)
router.use('/delete/:id',deleteArticle)

module.exports=router