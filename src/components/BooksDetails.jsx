import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../contextApi/ContextProvider';

const BooksDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const expectedBook = books.find(book => book.bookId == bookId);


    if (!expectedBook) {
        return <div className="text-center mt-20 text-red-500 font-bold text-xl">Book not found!</div>;
    }

    const {handleMarkAsRead,handleWishBooks}=useContext(BookContext)
  

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
  
  
    return (
        <div className="container mx-auto my-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-900 rounded-2xl p-6 lg:p-10 shadow-2xl">
                
                {/* ১. বাম পাশ: ইমেজ সেকশন */}
                <div className="bg-gray-100 rounded-2xl p-12 flex justify-center items-center h-[500px] lg:h-[600px]">
                    <img 
                        src={image} 
                        alt={bookName} 
                        className="h-full object-contain drop-shadow-2xl rounded-md"
                    />
                </div>

                {/* ২. ডান পাশ: বইয়ের সব ডিটেইলস */}
                <div className="flex flex-col h-full justify-center">
                    <h1 className="text-4xl font-bold font-serif text-white mb-2">{bookName}</h1>
                    <p className="text-gray-200 font-medium text-lg mb-4">By : {author}</p>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    <p className="text-gray-100 font-medium text-lg my-2">{category}</p>
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    <p className="text-white leading-relaxed mb-6">
                        <span className="font-bold text-gray-100">Review : </span>{review}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                        <span className="font-bold text-white">Tag</span>
                        <div className="flex gap-2">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="badge bg-green-50 text-green-600 font-medium px-4 py-3 border-none rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    {/* বইয়ের অন্যান্য তথ্যের টেবিল */}
                    <div className="overflow-x-auto my-4 max-w-md">
                        <table className="table table-compact border-none w-full">
                            <tbody>
                                <tr className="border-none">
                                    <td className="text-gray-200 pl-0 py-2 w-1/2">Number of Pages:</td>
                                    <td className="font-bold text-white py-2">{totalPages}</td>
                                </tr>
                                <tr className="border-none">
                                    <td className="text-gray-200 pl-0 py-2">Publisher:</td>
                                    <td className="font-bold text-white py-2">{publisher}</td>
                                </tr> {/* <-- এখানে আগে ভুল কার্লি ব্রেস ছিল, এখন ঠিক করা হয়েছে */}
                                <tr className="border-none">
                                    <td className="text-gray-200 pl-0 py-2">Year of Publishing:</td>
                                    <td className="font-bold text-white py-2">{yearOfPublishing}</td>
                                </tr>
                                <tr className="border-none">
                                    <td className="text-gray-200 pl-0 py-2">Rating:</td>
                                    <td className="font-bold text-white py-2">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ৩. বাটন সেকশন */}
                    <div className="flex gap-4 mt-4">
                        <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 rounded-xl font-bold">
                           Mark as read
                        </button>
                        <button onClick={()=>handleWishBooks(expectedBook)} className="btn bg-[#50B1C9] hover:bg-[#409eb5] text-white px-8 rounded-xl font-bold border-none">
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BooksDetails;