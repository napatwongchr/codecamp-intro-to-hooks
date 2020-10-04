import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    const { values, handleValueChange } = this.props;
    return (
      <div className="form-container">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={values.firstname}
          onChange={handleValueChange}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={values.lastname}
          onChange={handleValueChange}
        />
      </div>
    );
  }
}

export default Form;
