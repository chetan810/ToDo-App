import { useState } from "react";
import "./ToDo.css";
import { TodoForm } from "./TodoForm";
import { ToDoList } from "../ToDoList";
import ToDoDate from "./ToDoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./ToDoLocalStorage";

export const ToDo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());
  setLocalStorageTodoData(task); 

  ///////

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  ////////

  //////
  const handleDeleteToDo = (indexToDelete) => {
    setTask((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    );
  };

  ///////
  const clearAllList = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
        <ToDoDate />
      </header>

      <TodoForm onAddToDo={handleFormSubmit} />

      <section>
        <ul className="myUnOrdList">
          {task.map((curTask, index) => {
            return (
              <ToDoList
                key={index}
                data={curTask}
                onHandleDeleteToDo={() => {
                  handleDeleteToDo(index);
                }}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={clearAllList}>
          Clear All
        </button>
      </section>
    </section>
  );
};
