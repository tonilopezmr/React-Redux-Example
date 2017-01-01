import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {Provider} from 'react-redux'
import TodoApp from './todo-app/components/TodoApp'
import configureStore from './todo-app/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)