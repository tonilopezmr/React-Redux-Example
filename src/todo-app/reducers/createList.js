import {combineReducers} from 'redux'
import * as types from '../constants/actionTypes'
import {COMPLETED, UNCOMPLETED} from '../constants/filterTypes'

export const createIds = (filter) => {
  const handleToggle = (state, action) => {
    const {result: toggledId, entities} = action.response
    const {completed} = entities.todos[toggledId]
    const shouldRemove = (
      (completed && filter === UNCOMPLETED) ||
      (!completed && filter === COMPLETED)
    )
    return shouldRemove ?
      state.filter(id => id !== toggledId) :
      state
  }

  const ids = (state = [], action) => {
    switch (action.type) {
      case types.FETCH_TODOS_SUCCESS:
        return action.filter === filter ?
          action.response.result :
          state
      case types.ADD_TODO_SUCCESS:
        return filter !== COMPLETED ?
          [...state, action.response.result] :
          state
      case types.TOGGLE_TODO_SUCCESS:
        return handleToggle(state, action)
      default:
        return state
    }
  }

  return ids
}

const createList = (filter) => {


  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }

    switch (action.type) {
      case types.FETCH_TODOS_REQUEST:
        return true
      case types.FETCH_TODOS_SUCCESS:
        return false
      case types.FETCH_TODOS_ERROR:
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }

    switch (action.type) {
      case types.FETCH_TODOS_ERROR:
        return action.message
      case types.FETCH_TODOS_REQUEST:
      case types.FETCH_TODOS_SUCCESS:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids: createIds(filter),
    isFetching,
    errorMessage
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage