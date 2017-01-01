import {createStore} from 'redux'
import {loadState, saveState} from './localStorage'
import todoApp from './reducers'
import stubTodos from './stubs/stubTodos'

const configureStore = () => {
  const persistedTodos = loadState()
  const todos = persistedTodos === undefined? stubTodos : persistedTodos

  var store = createStore(todoApp, todos);

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    })
  })

  return store
}

export default configureStore