import React, { useState, useEffect } from "react";
import "./Form.css";

function FormHooks() {
  const firstname = useFormInput("");
  const lastname = useFormInput("");
  const width = useResizeWindow();
  useDocumentTitle(firstname.value, lastname.value);

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
      <span>Width: {width}</span>
    </div>
  );
}

function useDocumentTitle(firstname = "", lastname = "") {
  useEffect(() => {
    document.title = `${firstname} ${lastname}`;
  });
}

function useResizeWindow() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}

function useFormInput(initialName) {
  const [value, setValue] = useState(initialName);

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return { value, handleValueChange };
}

export default FormHooks;
