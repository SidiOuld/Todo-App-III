import React from "react";

function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id
    });
  };
  return (
    // <div
    //   onClick={toggleCompleted}
    //   className={`todo ${todo.completed ? "completed" : ""}`}
    // >
    //   <h1>{todo.item}</h1>
    // </div>

    <div className="card">
      <div className="card-content">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p
                className={`title ${
                  todo.completed ? "has-text-grey-light" : ""
                }`}
              >
                {todo.item}
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item buttons">
              <button
                onClick={toggleCompleted}
                className={`button has-text-weight-bold ${
                  todo.completed ? "is-warning" : "is-primary"
                }`}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
