import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
