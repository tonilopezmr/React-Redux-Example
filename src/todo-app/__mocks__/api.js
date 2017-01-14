export const addTodo = (text) =>
  new Promise(resolve => {
    resolve({
      id: '11-id',
      text: text,
      completed: false
    })
  })
