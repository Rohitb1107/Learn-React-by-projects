import React, { useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  return (
    <div className="contact-list-div">
      {props.contacts.map((contact) => {
        return <ContactCard contact={contact} key={contact.id} />;
      })}
    </div>
  );
};

export default ContactList;
