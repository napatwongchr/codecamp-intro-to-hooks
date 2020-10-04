import React from 'react'

class EnhancedForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        ...this.props.initialValues
      }
    }
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(e) {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return this.props.children({
      values: {...this.state.values},
      handleValueChange: this.handleValueChange
    })
  }
}

export default EnhancedForm