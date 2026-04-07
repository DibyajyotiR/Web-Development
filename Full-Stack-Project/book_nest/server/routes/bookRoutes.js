const express=require("express")
const router=express.Router
const{createBook,getBooks,getBookById,updateBook,deleteBook}=require("../controllers/bookController")

//authMiddleware  re user login karichiki nahi check hue
const authMiddleware = require("../middleware/authMiddleware")
//user login karichi jie se admin na nahi thn se book add ki delete n update kripariba
const adminMiddleware=require("../middleware/adminMiddleware")

router.get("/",getBooks)
router.get("/:id",getBookById)

router.post("/",authMiddleware,adminMiddleware,createBook)
router.put("/:id",authMiddleware,adminMiddleware,updateBook)
router.delete("/:id",authMiddleware,adminMiddleware,deleteBook)

module.exports=router