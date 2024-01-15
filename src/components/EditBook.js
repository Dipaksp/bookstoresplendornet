import React,{useState} from 'react'

const EditBook = ({book,handleEditBook}) => {
  
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);

    const [error,setError]=useState("")
    const clearEverything = () => {
      setTitle("");
      setAuthor("");
    };
    const saveBook = () => {
      
      if (title === "" || author === "") {
        setError("please Enter Valid Details fill all the fields");
      }
       else {
        handleEditBook({
            ...book,
            title:title,
            author:author
        })
      }
      clearEverything();
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          padding: "2%",
        }}
      >
        Book Name :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Book Name"
          style={{ padding: "2%", margin: "1%" }}
        />
        Author :{" "}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter Author Name"
          style={{ padding: "2%", margin: "1%" }}
        />
        <br />
        {error &&<span>{error}</span>}
        <br />
        <button style={{ padding: "2%", margin: "1%" }} onClick={() => saveBook()}>
          Save Book Details
        </button>
      </div>
    );
  };

export default EditBook