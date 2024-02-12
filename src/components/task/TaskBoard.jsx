import { useState } from "react";
import { ititialData } from "../data";
import BookList from "./BookList";
import TaskAction from "./TaskAction";

const TaskBoard = () => {
  const [books, setBooks] = useState(ititialData);
  return (
    <>
      <main className="my-10 lg:my-14">
        <TaskAction />
        <BookList books={books} />
      </main>
    </>
  );
};

export default TaskBoard;
