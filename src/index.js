import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Root from './todo-app/components/Root'
import configureStore from './todo-app/configureStore'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)