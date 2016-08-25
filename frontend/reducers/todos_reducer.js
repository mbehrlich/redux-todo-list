import { TODOS_CONSTANTS } from '../actions/todo_actions';
import { merge } from 'lodash';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  let newTodos;
  switch (action.type) {
    case TODOS_CONSTANTS.RECEIVE_TODOS:
      newTodos = {};
      action.todos.forEach(todo => {
        newTodos[todo.id] = todo;
      });
      return newTodos;
    case TODOS_CONSTANTS.RECEIVE_TODO:
      newTodos = merge({}, state);
      newTodos[action.todo.id] = action.todo;
      return newTodos;
    case TODOS_CONSTANTS.REMOVE_TODO:
      newTodos = merge({}, state);
      delete newTodos[action.todo.id];
      return newTodos;
    default:
      return state;
  }
};

export default TodosReducer;
