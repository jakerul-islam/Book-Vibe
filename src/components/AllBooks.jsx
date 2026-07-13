import React, { use } from 'react';
import BooksCard from './BooksCard';


const bookPromise = fetch('/booksData.json').then(res=>res.json())
const AllBooks = () => {
    const books = use(bookPromise)
    console.log(books)
    return (

        
        <div className="container mx-auto my-12 px-4">

            <h2 className='font-bold text-center my-4 text-3xl'>Books</h2>
        {/* গ্রিড লেআউট যোগ করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                books.map(book => <BooksCard book={book} key={book.bookId}></BooksCard>)
            }
        </div>
    </div>
    );
};

export default AllBooks;