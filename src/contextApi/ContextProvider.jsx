import React, { createContext, useState, } from 'react';



export const BookContext = createContext()


const ContextProvider = ({children}) => {

    const [wishBooks, setWishBooks]=useState([])

    const handleWishBooks =(currentBook)=>{

        const isReadListBook = storedBooks.find(book=>book.bookId==currentBook.bookId)
        if(isReadListBook){

            alert('the book already in read list')
            return
        }

        const isExistBook = wishBooks.find(book=>book.bookId==currentBook.bookId)

        if(isExistBook){
            alert(`${currentBook.bookName} is already exist`)
        }else{
            setWishBooks([...wishBooks,currentBook])
            alert(`${currentBook.bookName} is added successfully`)
        }
    }

      const [storedBooks, setStoredBooks]=useState([])
        const handleMarkAsRead = (currentBook)=>{

    const isExistBook = storedBooks.find(book=>book.bookId==currentBook.bookId)

    if(isExistBook){
        alert(`${currentBook.bookName} is already exsist`)
    }else{
        setStoredBooks([...storedBooks, currentBook])
    }

    
}

    const data ={
       handleMarkAsRead,storedBooks,setStoredBooks,wishBooks,setWishBooks,handleWishBooks
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default ContextProvider;