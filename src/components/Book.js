import React from "react";
import { useLocation } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const item = location.state;
  return (
    <div>
      {item && (
        <div
          key={item.id}
          style={{ border: "1px solid black", margin: "1%", padding: "1%", width:"500px" }}
        >
          <img
            src={item.coverImage}
            alt="books"
            style={{ width: "400px", height: "500px" }}
          />

          <div>
            <p>{item.title}</p>
            <h3>By {item.author}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
