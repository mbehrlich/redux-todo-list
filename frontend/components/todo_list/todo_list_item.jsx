import React from 'react';
import { merge } from 'lodash';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.doneToggle = this.doneToggle.bind(this);
    this.remove = this.remove.bind(this);
  }

  doneToggle(event) {
    event.preventDefault();

    let updatedItem = merge({}, this.props.item);

    updatedItem.done = updatedItem.done ? false : true;
    this.props.toggleTodo(updatedItem);
  }

  remove(event) {
    event.preventDefault();
    this.props.destroyTodo(this.props.item);
  }

  render(){
    return (
      <li>
        <div>
          <h4>{this.props.item.title}</h4>
          <button onClick={this.doneToggle}>{this.props.item.done ? "undo" : "done"}</button>
          <button onClick={this.remove}>Remove</button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
