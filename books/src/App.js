import { useEffect, useContext } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList'
import BookContext from './context/books';

function App() {

    const { fetchBooks } = useContext(BookContext);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className='app'>
            <h1>Reading list</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default App;