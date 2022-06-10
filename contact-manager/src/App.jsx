import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddContact />
    </div>
  );
}

export default App;
