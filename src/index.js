import React, {Component} from 'react'

import ReactDOM from 'react-dom'
import './index.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import TodoApp from './todo-app/TodoApp'
import todoApp from './todo-app/reducers/reducers'

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)