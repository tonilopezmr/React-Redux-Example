const todosFilter = (todos = [], filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(todo => todo.completed)
    case 'uncompleted':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

export default todosFilter