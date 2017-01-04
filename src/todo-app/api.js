import {v4} from 'node-uuid'

const fakeDataBase = {
  todos: [{
    id: v4(),
    text: 'Learn redux',
    completed: false
  }, {
    id: v4(),
    text: 'Start 2017',
    completed: true
  }, {
    id: v4(),
    text: 'Be happy',
    completed: true
  }, {
    id: v4(),
    text: 'Got strong',
    completed: false
  }]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) =>
  delay(5000).then(() => {
    const todos = fakeDataBase.todos
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
  })