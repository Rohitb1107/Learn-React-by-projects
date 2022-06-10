import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list-div">
      {contacts.map((item) => {
        return <ContactCard contacts={contacts} />;
      })}
    </div>
  );
};

export default ContactList;
