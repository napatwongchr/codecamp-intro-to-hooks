import React from "react"
import './Form.css'

class Form extends React.Component {
  render() {
    return <div className="form-container">
      <label htmlFor="firstname">First Name</label>
      <input id="firstname" name="firstname" type="text" value={this.props.values.firstname} onChange={this.props.handleValueChange} />
      <label htmlFor="lastname">Last Name</label>
      <input id="lastname" name="lastname" type="text" value={this.props.values.lastname} onChange={this.props.handleValueChange} />
    </div> 
  }
}

export default Form