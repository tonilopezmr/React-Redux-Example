'use strict'

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export default addTodo