import React, { useState } from "react";
import TodoReducer from "../Reducers/TodoReducer";

function TodoForm({ dispatch }) {
  const [menu, setMenu] = useState(false);
  const [item, setItem] = useState("");

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (item.length > 0) {
      dispatch({
        type: "ADD_TODO",
        payload: item
      });
      setItem("");
    }
  };

  const clear = e => {
    e.preventDefault();
    if (item.length > 0) {
      dispatch({
        type: "CLEAR"
      });
    }
  };

  return (
    <div className="navbar has-shadow">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p className="title">My Todos</p>
        </div>

        <a
          role="button"
          onClick={() => setMenu(!menu)}
          className={`navbar-burger burger ${menu ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <form onSubmit={handleSubmit} classNam="field has-addons" e>
              <p className="control is-expanded">
                <input
                  type="text"
                  value={item}
                  onChange={handleChange}
                  className="input"
                />
              </p>
              <p className="control">
                <button
                  onClick={handleSubmit}
                  className="button is-info has-text-weight-bold"
                >
                  Add-Todo
                </button>
                {/* <button
                  onClick={clear}
                  className="button is-info has-text-weight-bold"
                >
                  Clear
                </button> */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
