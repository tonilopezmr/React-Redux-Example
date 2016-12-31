import React, {Component} from 'react'

import ReactDOM from 'react-dom'
import './index.css'

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import todos from './todo-app/Todo.reducer'
import filter from './todo-app/VisibilityFilter.reducer'

import TodoApp from './todo-app/TodoApp'

const todoApp = combineReducers({
  todos,
  filter
})

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)