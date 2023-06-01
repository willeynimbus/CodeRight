import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import { Book } from "./Book";
import { Recom } from "./Recom";
import { recomandation } from "./recomandation";

const BookList = () => {
  return (
    <>
      <h1>Amazon's Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book book {...book} key={book.id} number={index} />;
        })}
      </section>
      <h1>Our Recomandation</h1>
      <section className="recommandation">
        {recomandation.map((recom) => {
          return <Recom recom {...recom} />;
        })}
      </section>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
