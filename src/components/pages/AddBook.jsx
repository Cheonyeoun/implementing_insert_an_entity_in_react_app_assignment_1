import { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddBook({addBook}){
    const navigate = useNavigate(); 
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverImage, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, coverImage, description };
        addBook(newBook);
        alert("Book submitted");
        navigate("/");
    };

    return(
        <>
            <div className="flex justify-center p-6 overscroll-none">
            <div className="shadow-xl w-full p-16 rounded-xl space-2">
                <form onSubmit={handleSubmit} >
                <div>
                        <label htmlFor="title" className="text-black ">Title:</label>
                        <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                placeholder="The Double" 
                                className="text-gray-500 w-full border-b  outline-none focus:ring-none placeholder:italic pl-2 m-2  p-1" 
                                required
                          />
    
                </div>
    
                <div className="mt-3">
                        <label htmlFor="author" className="text-black flex">Author:</label>
                        <input  type="text" 
                                name="author" 
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)} 
                                placeholder="e.g. Fyodor Mikhailovich Dostoevsky"
                                className = "text-gray-500 w-full border-b pl-2 m-2 p-1 outline-none focus:ring-none placeholder:italic"
                                required 
                         />
                    </div>

                <div>
                        <label htmlFor="coverImage" className="text-black ">Cover-Image:</label>
                        <input 
                                type="url"
                                name="coverImage" 
                                id="coverImage"  
                                value={coverImage}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="https://example.com/image.jpg"
                                className="text-gray-500 w-full border-b  outline-none focus:ring-none pl-2 m-2  p-1" 
                                required
                              />
    
                </div>
    
                <div className="mt-3">
                        <label htmlFor="description" className="text-black">Description:</label>
                        <textarea 
                                name="description" 
                                id="description" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Write Something about this." 
                                rows="3" 
                                className="text-gray-500 w-full border-b pl-2 m-2  p-1 outline-none focus:ring-none placeholder:italic" 
                                required></textarea>
    
                </div>
                    <div className="flex justify-center mr-6 mt-4">
                        <button type="submit" className="bg-stone-600 rounded p-1 hover:bg-stone-700 hover:text-gray-200 transition-all duration-200">Add Book</button>
                    </div>
                </form>
            </div>
</div>

        
        </>
    )
}
export default AddBook;