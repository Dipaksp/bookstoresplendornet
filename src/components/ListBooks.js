import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";
import EditBook from "./EditBook";

const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [newbook, setnewBook] = useState(false);
  const [editBook, setEditBook] = useState(false);
  const [book, setBook] = useState(null);
  const [search, setSearch] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    axios
      .get("/books.json")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log("error", err));
  }, []);

  const addNewBook = (book) => {
    setBooks([...books, { id: Math.random() * 100 + books.length, ...book }]);
  };
  const handleEditBook = (book) => {
    let remainig = books.filter((item) => item.id !== book.id);
    setBooks([...remainig, book]);
    setEditBook(false)
  };
  const handleDelete = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };
  const handleSearch=(e)=>{
    setSearch(e.target.value)
    if (e.target.value.length === 0) {
      setSearchToggle(false);
    } else {
      setSearchToggle(true);
    }
  }
  let filterBooks =
    search !== ""
      ? books.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.author.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <div>
      <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%", }}>
        <button onClick={() => setnewBook(!newbook)}> Add New Book</button>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {filterBooks.length > 0 &&
        searchToggle &&
        <>{
        filterBooks.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid black", margin: "1%", padding: "1%" }}
          >
            <Link to={`/book/:${item.id}`} state={item}>
              <img
                src={item.coverImage}
                alt="books"
                style={{ width: "250px", height: "350px" }}
              />
            </Link>
            <div>
              <p>{item.title}</p>
              <h3>By {item.author}</h3>
        
            </div>
          </div>
        ))}
        <button onClick={() => setSearchToggle(!searchToggle)}>Close</button>
        </>}
      {newbook && (
        <div>
          <AddForm addNewBook={addNewBook} />
          <br />
          <button onClick={() => setnewBook(!newbook)}>Close</button>
        </div>
      )}
      {editBook && (
        <div>
          <EditBook book={book} handleEditBook={handleEditBook} />
        </div>
        
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {books.length > 0 &&
          !searchToggle &&
          books.map((item) => (
            <div
              key={item.id}
              style={{ border: "1px solid black", margin: "1%", padding: "1%" }}
            >
              <Link to={`/book/:${item.id}`} state={item}>
                <img
                  src={item.coverImage}
                  alt="books"
                  style={{ width: "250px", height: "350px" }}
                />
              </Link>
              <div>
                <p>{item.title}</p>
                <h3>By {item.author}</h3>
                <br />
                <button
                  onClick={() => {
                    setEditBook(!editBook);
                    setBook(item);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListBooks;
