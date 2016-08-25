import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    let todoItems = this.props.todos.map((item) => (
      <TodoListItem item={item}
                    toggleTodo={this.props.toggleTodo}
                    destroyTodo={this.props.destroyTodo}
                    key={item.id} />

    ));
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default TodoList;
