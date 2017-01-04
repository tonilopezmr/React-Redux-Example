import {v4} from 'node-uuid'
import {ALL, COMPLETED, UNCOMPLETED} from '../constants/filterTypes'
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

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    };
    fakeDataBase.todos.push(todo)
    return todo
  })

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDataBase.todos
      .find(todo => todo.id === id);
    todo.completed = !todo.completed
    return todo
  })

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    if (Math.random() > 0.8) {
      throw new Error("In your face")
    }

    const todos = fakeDataBase.todos
    switch (filter) {
      case ALL:
        return todos
      case COMPLETED:
        return todos.filter(todo => todo.completed)
      case UNCOMPLETED:
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  })