import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list-div">
      {contacts.map((item) => {
        return (
          <div key={contacts.id}>
            <div>{contacts.name}</div>
            <div>{contacts.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
