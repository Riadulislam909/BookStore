import { useState } from "react";
import { initialData } from "../data";
import BookList from "./BookList";
import TaskAction from "./TaskAction";

const TaskBoard = () => {
  const [books, setBooks] = useState(initialData);
  function handleSearch(searchTerm) {
    let searchedItems = books.filter((book) => {
      return book.bookName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setBooks([...searchedItems]);
  }

  return (
    <>
      <main className="my-10 lg:my-14">
        <TaskAction onSearch={handleSearch} />
        <BookList books={books} />
      </main>
    </>
  );
};

export default TaskBoard;
