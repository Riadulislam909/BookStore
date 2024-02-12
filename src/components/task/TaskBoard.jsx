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
  function handleSorting(sortingValue) {
    if (sortingValue === "name_asc") {
      let sortedBooks = [...books].sort((a, b) => {
        let fa = a.bookName.toLocaleLowerCase();
        let fb = b.bookName.toLocaleLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setBooks(sortedBooks);
    } else if (sortingValue === "name_desc") {
      let sortedBooks = [...books].sort((b, a) => {
        let fa = a.bookName.toLocaleLowerCase();
        let fb = b.bookName.toLocaleLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setBooks(sortedBooks);
    } else if (sortingValue === "year_asc") {
      let sortedBooks = [...books].sort((a, b) => {
        return a.publicationYear - b.publicationYear;
      });
      setBooks(sortedBooks);
    } else if (sortingValue === "year_desc") {
      let sortedBooks = [...books].sort((b, a) => {
        return a.publicationYear - b.publicationYear;
      });
      setBooks(sortedBooks);
    }
  }

  return (
    <>
      <main className="my-10 lg:my-14">
        <TaskAction onSearch={handleSearch} onSort={handleSorting} />
        <BookList books={books} />
      </main>
    </>
  );
};

export default TaskBoard;
