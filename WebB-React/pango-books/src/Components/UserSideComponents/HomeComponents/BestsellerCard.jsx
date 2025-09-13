import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const BestsellerCard = ({ book, navigate }) => {
  return (
    <div className='w-48 bg-white rounded-2xl shadow-md p-3 flex-shrink-0 relative cursor-pointer'>
        onClick={()=> navigate(`/product-details`)}
        <img src={book.image} alt={book.title}
        className='h-52 w-full object-cover rounded-lg' />

        {book.sold &&(
            <span className='absolute top-24 left-0 w-full bg-yellow-500 text-center text-sm font-semibold text-white py-1'>Sold</span>
        )}
        <div>
            <p></p>
            <h3></h3>
            <div></div>
        </div>
    </div>
  )
}

export default BestsellerCard