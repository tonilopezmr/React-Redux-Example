const toggle = (todo) => ({
  ...todo,
  completed: !todo.completed
})

const toggleTodo = (todo, id) => {
  if (todo.id !== id) {
    return todo
  }

  return toggle(todo)
}

const addTodo = (action) => {
  return {
    id: action.id,
    text: action.text,
    completed: false
  }
}

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(action)
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id)
    default:
      return state
  }
}

export default todo