import React, { useState } from "react";

const AddForm = ({ addNewBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, seturl] = useState("");
  const [error,setError]=useState("")
  const clearEverything = () => {
    setTitle("");
    setAuthor("");
    seturl("");
  };
  const saveBook = () => {
    
    if (title === "" || author === "" || url === "") {
      setError("please Enter Valid Details fill all the fields");
    }
     else {
      addNewBook({
        title: title,
        author: author,
        coverImage: url,
      });
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
      Cover Page URL :{" "}
      <input
        type="url"
        value={url}
        onChange={(e) => seturl(e.target.value)}
        placeholder="Paste image URl here"
        style={{ padding: "2%", margin: "1%" }}
      />
      <br />
      {error &&<span>{error}</span>}
      <br />
      <button style={{ padding: "2%", margin: "1%" }} onClick={() => saveBook()}>
        Save Book
      </button>
    </div>
  );
};

export default AddForm;
