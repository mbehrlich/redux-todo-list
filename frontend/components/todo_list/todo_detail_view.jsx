import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(event) {
    event.preventDefault();
    this.props.destroyTodo(this.props.todo);
  }

  render() {
    return (
      <div>
        <p>Body: {this.props.todo.body}</p>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }

}

export default TodoDetailView;
