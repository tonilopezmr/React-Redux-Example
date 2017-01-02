import {createStore} from 'redux'
import {loadState, saveState} from './localStorage'
import todoApp from './reducers'
import stubTodos from './stubs/stubTodos'

function addLoggingToDispatch(store) {
  const rawDispatch = store.dispatch
  if (!console.group) {
    return rawDispatch
  }

  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: red', action)
    const rawReturnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.log()
    console.groupEnd(action.type)
    return rawReturnValue
  }
}

const configureStore = () => {
  const persistedTodos = loadState()
  const todos = persistedTodos === undefined ? stubTodos : persistedTodos

  var store = createStore(todoApp, todos);

  if(process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    })
  })

  return store
}

export default configureStore