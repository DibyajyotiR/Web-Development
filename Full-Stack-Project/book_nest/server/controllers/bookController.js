const Book = require("../models/book")
//create book
exports.createBook=async(req,res)=>{
    try{
        const{title, author, description, price, category, stock, image}=req.body
        const book=await Book.create({
            title, 
            author, 
            description, 
            price, 
            category, 
            stock, 
            image
        })
        res.status(201).json({
            success:false,
            message:"Book Created",
            data:book
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to create book",
            error:err.message
        })
    }
}

//Get All Books
exports.getBooks=async(req,res)=>{
    try{
        const books=await Book.find().populate("category")
        res.status(200).json({
            success:true,
            data:books
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch books",
            error:err.message
        })
    }
}

//Get Book by Id
exports.getBookById=async (req,res)=>{
    try{
        const id=req.params.id
        const book=await Book.findById(id).populate("category")
        if(!book){
            return res.status(404).json({
                success:false,
                message:"Book not found"
            })
        }
        res.status(200).json({
            success:true,
            data:book
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch book",
            error:err.message
        })
    }
}
//Update Book
exports.updateBook=async(req,res)=>{
    try{
        const id = req.params.id
        const updatedBook=await Book.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        res.status(200).json({
            success:true,
            message:"Book Updated",
            data:updatedBook
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Update failed",
            error:err.message
        })
    }
}
exports.deleteBook=async(req,res)=>{
    try{
         const id=req.params.id
         const deletedBook=await Book.findByIdAndDelete(id)
         res.status(200).json({
            success:true,
            message:"Book Deleted",
            data:deletedBook
         })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Delete Failed",
            error:err.message
        })
    }
}