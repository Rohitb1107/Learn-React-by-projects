import React, { useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

const ContactList = () => {
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

  function AddContactHandler(contact) {
    // console.log(contact);
    // setContacts(...contacts, contact);
  }

  return (
    <div className="contact-list-div">
      <AddContact AddContactHandler={AddContactHandler} />
      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <ContactCard contact={contact} />
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
