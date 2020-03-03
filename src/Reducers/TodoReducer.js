import React, { useReducer } from "react";

const todo = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, id: Date.now(), completed: false }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });

    default:
      return state;
  }
};

export { todo };
export { todoReducer };
