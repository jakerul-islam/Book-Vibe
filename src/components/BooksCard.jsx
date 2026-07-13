import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const BooksCard = ({ book }) => {
    const { bookName, author, image, rating, category, tags,bookId } = book;

    return (
        <Link to={`/books-details/${bookId}`} className="card bg-base-100 w-full max-w-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          
            <figure className="bg-gray-100 rounded-2xl p-8 flex justify-center items-center h-[230px]">
                <img
                    src={image}
                    alt={bookName}
                    className="h-full object-contain drop-shadow-md rounded-sm"
                />
            </figure>

          
            <div className="mt-6 flex flex-col flex-grow">
         
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="badge bg-green-50 text-green-600 font-medium px-3 py-3 border-none rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

               
                <h2 className="text-xl font-bold text-white line-clamp-1 mb-2">
                    {bookName}
                </h2>

  
                <p className="text-white font-medium text-sm mb-4">
                    By : {author}
                </p>

        
                <div className="border-t border-dashed border-white my-2"></div>

           
                <div className="flex justify-between items-center text-white font-medium text-sm pt-2">
                    <span>{category}</span>
                    <div className="flex items-center gap-1.5">
                        <span>{rating.toFixed(2)}</span>
                   
                        <FaRegStar></FaRegStar>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;