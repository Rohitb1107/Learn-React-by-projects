import React from "react";
import { BsTrash } from "react-icons/bs";

const ContactCard = ({ contacts }) => {
  return (
    <div className="contact-list-div">
      {contacts.map((item) => {
        return (
          <div className="item-div" key={item.id}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <BsTrash />
          </div>
        );
      })}
    </div>
  );
};

export default ContactCard;
