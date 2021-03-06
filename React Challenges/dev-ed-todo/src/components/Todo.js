import React from "react";

function Todo({ text, todos, setTodos, id }) {
  const deleteHandler = () => {
    console.log("Hello ");
    setTodos(todos.filter((el) => el.id != id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
