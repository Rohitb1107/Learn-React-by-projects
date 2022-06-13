import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/action";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      task,
      status: false,
      id: uuid(),
    };
    const addTodoAction = addTodo(payload);
    dispatch(addTodoAction);
  };

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div>
      <h3>Add Todo</h3>
      <input
        value={task}
        onChange={handleChange}
        type="text"
        placeholder="add task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
