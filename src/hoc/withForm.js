import React from 'react'

function withForm(WrappedComponent, initFormState) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = initFormState
      this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(e) {
      console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      return <WrappedComponent
        values={this.state}
        handleValueChange={this.handleValueChange}
        {...this.props}
      />
    }
  }
}

export default withForm