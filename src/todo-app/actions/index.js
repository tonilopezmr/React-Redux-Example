import * as api from '../api'
import {getIsFetching} from '../reducers'
import {normalize}from 'normalizr'
import * as schema from '../schema'
import * as types from '../constants/actionTypes'

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: types.FETCH_TODOS_REQUEST,
    filter
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfTodos)
      })
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_ERROR,
        filter,
        message: error.message || 'Something went wrooong'
      })
    }
  )
}

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })

export const onToggle = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: types.TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })
