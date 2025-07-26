import { useState } from "react";

export const TodoForm = ({onAddToDo}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddToDo(inputValue);
    setInputValue("");
  };

  return (
    <section>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            add task
          </button>
        </div>
      </form>
    </section>
  );
};
