// src/App.jsx
import React, { useState } from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { Routes,Route } from 'react-router-dom';
import AddBook from './components/pages/AddBook';
import booksData from './booksData';


function App() {
    const [books, setBooks] = useState(booksData);

    const addBook = (newBook) => {
      setBooks([...books, { ...newBook, id: Date.now() }]);
    };

  return (
  
  <>
  <div className="App">
      <Routes>
        <Route path='/' element={<Home books={books} />} />
        <Route path='/home' element={<Home books={books} />} />
        <Route path='/addbook' element={<AddBook addBook={addBook} />} />

      </Routes>
    </div> 
  </>
    
  );
}

export default App;
