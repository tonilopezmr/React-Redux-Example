import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {todosFilter, getIsFetching, getErrorMessage} from '../reducers'
import * as actions from '../actions'
import FetchError from './FetchError'
import {ALL} from '../constants/filterTypes'

class TodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(lastProps) {
    if (this.props.filter !== lastProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const {filter, fetchTodos} = this.props
    fetchTodos(filter)
  }

  render() {
    const {onToggle, errorMessage, todos, isFetching} = this.props

    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if(errorMessage && !todos.length) {
      return <FetchError
        message={errorMessage}
        onRetry={() => this.fetchData()}
      />
    }

    return <Todos
      todos={todos}
      onToggle={onToggle}
    />
  }
}

const Todo = ({
  onClick,
  text,
  completed
}) => (
  <li onClick={onClick}>{
    completed ?
      (<span className="Todo-completed">{text}</span>)
      : text
  }</li>
)

const Todos = ({
  todos,
  onToggle
}) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id}
            onClick={() => onToggle(todo.id)}
            {...todo}
      />)}
  </ul>
)

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || ALL
  return {
    todos: todosFilter(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
}

TodoList = withRouter(connect(
  mapStateToProps,
  actions
)(TodoList))

export default TodoList
