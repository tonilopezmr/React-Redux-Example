const todosFilter = (todos = [], filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_UNCOMPLETED':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

export default todosFilter