export const TODOS_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DESTROY_TODO: "DESTROY_TODO",
  REMOVE_TODO: "REMOVE_TODO"
};

export const toggleTodo = (todo) => ({
  type: TODOS_CONSTANTS.TOGGLE_TODO,
  todo
});

export const destroyTodo = todo => ({
  type: TODOS_CONSTANTS.DESTROY_TODO,
  todo
});

export const removeTodo = todo => ({
  type: TODOS_CONSTANTS.REMOVE_TODO,
  todo
});

export const requestTodos = () => ({
  type: TODOS_CONSTANTS.REQUEST_TODOS
});

export const receiveTodos = todos => ({
  type: TODOS_CONSTANTS.RECEIVE_TODOS,
  todos
});

export const createTodo = todo => ({
  type: TODOS_CONSTANTS.CREATE_TODO,
  todo
});

export const receiveTodo = todo => ({
  type: TODOS_CONSTANTS.RECEIVE_TODO,
  todo
});
