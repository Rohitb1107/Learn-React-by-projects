import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "thor",
      email: "thor@gmail.com",
    },
  ]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const getDataFromLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getDataFromLS) {
      setContacts(getDataFromLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Navbar />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
