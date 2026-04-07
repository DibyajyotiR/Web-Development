import React,{useEffect,useState} from 'react'
import BookCard from "./BookCard"
import axios from "axios"

const Books = () => {
    const [books,setBooks]=useState([])
    const [filteredBooks,setFilteredBooks]=useState({})
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories=[
        "All","Programming","Fiction", "Science", "History", "Biography",
    ]
    
  return (
    <div>
        <section className='max-w-7xl mx-auto px-6 py-16'>
            {/* Search + Filter */}
            <div className='flex flex-col md:flex-row md:justify-between gap-4 mb-10'>
             {/* Search */}
             <input type="text" placeholder='Search books...'
                      className="border px-4 py-2 rounded-lg w-full md:w-72 focus:ring-2 focus:ring-indigo-500 outline-none"
                      value={search}/>
             {/* Category Filter */}  
             <select name="" id=""></select>      
            </div>
        </section>
    </div>
  )
}

export default Books