import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Thor",
      email: "thor@gmail.com",
    },
    {
      id: 2,
      name: "Tony",
      email: "tony@gmail.com",
    },
    {
      id: 3,
      name: "Hulk",
      email: "hulk@gmail.com",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
