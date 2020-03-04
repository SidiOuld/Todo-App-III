import React, { useReducer } from "react";

// from reducers
import { todoReducer, todo } from "../Reducers/TodoReducer";
//components
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, todo);
  return (
    <>
      {/* <TodoForm dispatch={dispatch} /> */}
      {/* {state.map(_todo => {
        return <Todo key={_todo.id} todo={_todo} dispatch={dispatch} />;
      })} */}

      <div>
        <div className="hero is-info">
          <div className="hero-body has-text-centered">
            <p className="title is-1">{state.length} Todos</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <TodoForm dispatch={dispatch} />
            {state.map(_todo => {
              return <Todo key={_todo.id} todo={_todo} dispatch={dispatch} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default TodoList;
