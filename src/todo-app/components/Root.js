import React from 'react'
import {Provider} from 'react-redux'
import TodoApp from './TodoApp'
import {Router, Route, browserHistory} from 'react-router'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/(:filter)" component={TodoApp} />
      </Router>
    </Provider>
  )
}

export default Root