import React from "react";

function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id
    });
  };
  return (
    <div
      onClick={toggleCompleted}
      className={`todo ${todo.completed ? "completed" : ""}`}
    >
      <h1>{todo.item}</h1>
    </div>
  );
}

export default Todo;
