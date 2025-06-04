// src/components/Home.jsx

import BookCard from "./components/BookCard";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({books}) => {
  const navigate = useNavigate(); 

  return (
    <div className="home-container">
      <div>
          <h1>Book Library</h1>
          <div className="flex justify-end mt-3">
            <button onClick={() => navigate('/addbook')} className="bg-amber-100 rounded-sm p-2 text-black ">Add Book</button>
          </div>
      </div>
      

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
