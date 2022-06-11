import React from "react";
import { BsTrash } from "react-icons/bs";

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-list-div">
      <div className="item-div">
        <div>{contact.name}</div>
        <div>{contact.email}</div>
        <BsTrash />
      </div>
    </div>
  );
};

export default ContactCard;
