import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Rohit",
      email: "rohit@gmail.com",
    },
    {
      id: 2,
      name: "bagadi",
      email: "bagadi@gmail.com",
    },
    {
      id: 3,
      name: "thor",
      email: "thor@gmail.com",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <AddContact />
      {contacts.map((item) => {
        return <ContactList contacts={contacts} />;
      })}
    </div>
  );
}

export default App;
