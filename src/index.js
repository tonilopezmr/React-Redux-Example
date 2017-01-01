import React, {Component} from 'react'

import ReactDOM from 'react-dom'
import './index.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import TodoApp from './todo-app/TodoApp'
import todoApp from './todo-app/reducers/reducers'

import stubTodos from './todo-app/stubs/stubTodos'

var store = createStore(todoApp, stubTodos);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)