export const fetchTodos = (success, error) =>{
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    datatype: 'json',
    success,
    error
  });
};

export const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: todo,
    datatype: 'json',
    success,
    error
  });
};

export const updateTodo = (todo, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: {todo: todo},
    datatype: 'json',
    success,
    error
  });
}

export const destroyTodo = (todo, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`,
    datatype: 'json',
    success,
    error
  });
}
