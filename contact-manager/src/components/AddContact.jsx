import React, { useState, useEffect } from "react";
import "./style.css";

const AddContact = (props) => {
  const [addData, setAddData] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setAddData((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.AddContactHandler(addData);
    setAddData({
      name: "",
      email: "",
    });
    console.log(addData);
  }

  return (
    <div className="input-div">
      <h3>Add Contact</h3>
      <form className="w-20" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={addData.name}
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={addData.email}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
