import React, { useState } from "react";
import TodoReducer from "../Reducers/TodoReducer";

function TodoForm({ dispatch }) {
  const [item, setItem] = useState("");

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };
  return (
    <>
      <h1>my form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleSubmit}>Add-Todo</button>
      </form>
    </>
  );
}

export default TodoForm;
