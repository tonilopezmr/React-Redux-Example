import {createStore, applyMiddleware} from 'redux'
import {loadState, saveState} from './localStorage'
import todoApp from './reducers'
import stubTodos from './stubs/stubTodos'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'


const configureStore = () => {
  const persistedTodos = loadState()
  const todos = persistedTodos === undefined ? stubTodos : persistedTodos

  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(todoApp, todos, applyMiddleware(...middlewares))
}

export default configureStore