import React, { useState, useEffect } from "react";

const TodoInput = () => {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div>
      <h3>Add Todo</h3>
      <div>{task}</div>
      <input
        value={task}
        onChange={handleChange}
        type="text"
        placeholder="add task"
      />
      <button>Add</button>
    </div>
  );
};

export default TodoInput;
