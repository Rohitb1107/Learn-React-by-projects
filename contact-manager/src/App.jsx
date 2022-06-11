import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";

function App() {
  const [contacts, setContacts] = useState([
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
  ]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <Navbar />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
