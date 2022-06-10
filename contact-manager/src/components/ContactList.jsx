import React from "react";
import ContactCard from "./ContactCard";

const ContactList = () => {
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
    <div className="contact-list-div">
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
