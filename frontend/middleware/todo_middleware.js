import { TODOS_CONSTANTS } from '../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from '../util/todo_api_util';
import { receiveTodos, receiveTodo, removeTodo } from '../actions/todo_actions';


const TodoMiddleware = store => next => action => {
  let success;
  let error = (data) => {console.log(data);};
  switch (action.type) {
    case TODOS_CONSTANTS.REQUEST_TODOS:
      success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success, error);
      break;
    case TODOS_CONSTANTS.CREATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      createTodo(action.todo, success, error);
      break;
    case TODOS_CONSTANTS.TOGGLE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      updateTodo(action.todo, success, error);
      break;
    case TODOS_CONSTANTS.DESTROY_TODO:
      success = data => store.dispatch(removeTodo(data));
      destroyTodo(action.todo, success, error);
      break;
    default:
      return next(action);
  }
};

export default TodoMiddleware;
