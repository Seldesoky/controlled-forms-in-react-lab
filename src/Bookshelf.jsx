import { useState } from 'react';

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks(prevBooks => [...prevBooks, newBook]);
    setNewBook({ title: '', author: '' }); 
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
