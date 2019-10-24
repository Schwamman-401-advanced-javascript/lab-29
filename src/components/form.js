import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: undefined,
    }
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  submitData = e => {
    e.preventDefault();
    this.props.add(this.state.input);
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.submitData} id='todoForm'>
            <input id='item' placeholder='Add To Do List Item' onChange={this.handleChange}></input>
          </form>
        </div>
      </>
    )
  }
}

export default Form;