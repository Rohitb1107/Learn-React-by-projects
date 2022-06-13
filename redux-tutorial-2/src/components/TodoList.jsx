import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
