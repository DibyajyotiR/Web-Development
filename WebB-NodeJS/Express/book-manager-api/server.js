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

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})