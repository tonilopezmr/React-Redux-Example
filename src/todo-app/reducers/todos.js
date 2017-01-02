const toggle = (todo) => ({
  ...todo,
  completed: !todo.completed
})

const addTodo = (state, text) => {
  return [...state, {
    id: state.length,
    text: text,
    completed: false
  }]
}

const removeTodo = (state, id) => {
  const index = state.findIndex((todo) => todo.id === id)
  return [
    ...state.slice(0, index),
    ...state.slice(index + 1)
  ]
}

const toggleTodo = (state, id) => {
  return state.map(todo => {
    if (todo.id !== id) {
      return todo
    }

    return toggle(todo)
  })
}

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.text)
    case 'REMOVE_TODO':
      return removeTodo(state, action.id)
    case 'TOGGLE_TODO':
      return toggleTodo(state, action.id)
    default:
      return state
  }
}

export default todo