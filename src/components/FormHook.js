import React, { useState } from "react";
import "./Form.css";

function FormHooks() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleFirstnameChange(e) {
    setFirstname(e.target.value);
  }

  function handleLastnameChange(e) {
    setLastname(e.target.value);
  }

  return (
    <div className="form-container">
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="firstname"
        type="text"
        value={firstname}
        onChange={handleFirstnameChange}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        value={lastname}
        onChange={handleLastnameChange}
      />
    </div>
  );
}

export default FormHooks;
