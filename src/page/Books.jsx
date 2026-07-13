import React, { useContext } from 'react';
import { BookContext } from '../contextApi/ContextProvider';

const Books = () => {
    const {storedBooks,wishBooks}=useContext(BookContext)
    console.log(storedBooks,wishBooks, 'from listed books')
    return (
        <div>
            <h2>listed books: {storedBooks.length}</h2>
            <h2>wish books: {wishBooks.length}</h2>
        </div>
    );
};

export default Books;