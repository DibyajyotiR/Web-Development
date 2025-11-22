const express =require("express")
const app=express()
const PORT =3000

app.use(express.json())
let books=[
    {id:1,title:"NodeJS MasterClass",author:"Smith"},
    {id:2,title:"Mastering MERN Stack",author:"John"},
]
//!Get all books
app.get("/books",(req,res)=>{
    res.json(books)
})

//?Add new book
app.post("/books",(req,res)=>{
    const newBook=req.body;
    newBook.id=books.length+1;
    //push new book into the existing book array
    books.push(newBook);
    res.json({message:"Book Added",newBook,allBooks:books})
})

//!Get a book by ID
app.get("/books/:id",(req,res)=>{
    //get the id from params
    //Number is a inbuilt method which convert string to number
    const bookId=Number(req.params.id) //convert string to number
    const bookFound=books.find((book)=>{
        return book.id ===bookId
    })
    if(!bookFound){
        return res.json({message:"Book Not Found"})
    }
    res.json(bookFound)
})

//!Delete a book by ID
app.delete("/books/:id",(req,res)=>{
    const bookId=Number(req.params.id)
    books=books.filter((book)=>{
        return book.id !== bookId
    })
    res.json({message:"Book deleted successfully",books})
})


//!Update book by ID
app.put("/books/:id",(req,res)=>{
    const bookId=Number(req.params.id)
    const index=books.findIndex((book)=>{
        return book.id === bookId
    })
    if(index=== -1){
        res.json({message:"Book not found"})
    }
    //Update
    //if we add (...)it means previous data will be same 
    const updatedBook={...books[index],...req.body}
    books[index]=updatedBook
    res.json({message:"Book updated",data:updatedBook})
})

//!Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})