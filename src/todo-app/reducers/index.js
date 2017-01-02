import {combineReducers} from 'redux'

import todos, * as fromTodos from './todos'

const todoApp = combineReducers({
  todos,
})

export default todoApp

export const todosFilter = (state, filter) =>
  fromTodos.todosFilter(state.todos, filter)