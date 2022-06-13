import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
