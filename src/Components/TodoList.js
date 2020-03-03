import React, { useReducer } from "react";

// from reducers
import { todoReducer, todo } from "../Reducers/TodoReducer";
//components
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, todo);
  console.log("my", state);
  return (
    <>
      <TodoForm dispatch={dispatch} />
      {state.map(_todo => {
        console.log("rrr", _todo);
        return <Todo key={_todo.id} todo={_todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TodoList;
