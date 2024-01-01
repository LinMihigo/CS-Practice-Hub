import { createContext, useState, useCallback } from "react";
import axios from 'axios';

const BookContext = createContext();

function Provider({ children }) { //Provider helps pass state into BookContent.Provider
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, [])

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        })
        setBooks(updatedBooks);
    }
   
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks)
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title })
        
        const updatedBooks= [ ...books, response.data ];
        setBooks(updatedBooks);
    }

    const valueToShare= {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }

    return (
    <BookContext.Provider value={valueToShare}>
    {children}
    </BookContext.Provider>)
}

export { Provider };
export default BookContext;