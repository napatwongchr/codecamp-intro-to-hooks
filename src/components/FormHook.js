import React, { useState } from "react";
import "./Form.css";

function FormHooks() {
  const firstname = useFormInput("");
  const lastname = useFormInput("");

  return (
    <div className="form-container">
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="firstname"
        type="text"
        value={firstname.value}
        onChange={firstname.handleValueChange}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        value={lastname.value}
        onChange={lastname.handleValueChange}
      />
    </div>
  );
}

function useFormInput(initialName) {
  const [value, setValue] = useState(initialName);

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return { value, handleValueChange };
}

export default FormHooks;
