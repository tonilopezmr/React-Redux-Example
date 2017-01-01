import {combineReducers} from 'redux'

import todos from './Todo.reducer'
import filter from './VisibilityFilter.reducer'

const todoApp = combineReducers({
  todos,
  filter
})

export default todoApp