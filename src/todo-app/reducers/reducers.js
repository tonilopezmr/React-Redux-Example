import {combineReducers} from 'redux'

import todos from './todos'
import filter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  filter
})

export default todoApp