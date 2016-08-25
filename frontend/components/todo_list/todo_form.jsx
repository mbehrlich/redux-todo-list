import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.updateFields = this.updateFields.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateFields(event) {
    this.setState({title: event.currentTarget.value});
  }

  updateBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  submit(event) {
    event.preventDefault();
    this.props.createTodo({todo: this.state});
  }

  render(){
    return (
      <form >
        <label>
          Title: <input value={this.state.title} onChange={this.updateFields}></input>
        </label>
        <label>
          Body: <textarea onChange={this.updateBody} value={this.state.body}></textarea>
        </label>
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
