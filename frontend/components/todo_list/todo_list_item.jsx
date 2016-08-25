import React from 'react';
import { merge } from 'lodash';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.doneToggle = this.doneToggle.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = {detail: false}
  }

  doneToggle(event) {
    event.preventDefault();

    let updatedItem = merge({}, this.props.item);

    updatedItem.done = updatedItem.done ? false : true;
    this.props.toggleTodo(updatedItem);
  }

  toggleDetail(event){
    this.state.detail ? this.setState({detail: false}) : this.setState({detail: true});
  }

  render(){
    let detail;
    if (this.state.detail) {
      detail = (<TodoDetailViewContainer todo={this.props.item}/>);
    }
    return (
      <li>
        <div>
          <h4 onClick={this.toggleDetail}>{this.props.item.title}</h4>
          {detail}
          <button onClick={this.doneToggle}>{this.props.item.done ? "undo" : "done"}</button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
