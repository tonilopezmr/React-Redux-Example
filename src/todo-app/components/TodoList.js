import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import todosFilter from '../reducers/todosFilter'
import {toggleTodo} from '../actions'

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

const mapStateToProps = (state, {params}) => ({
  todos: todosFilter(state.todos, params.filter)
})

const TodoList = withRouter(connect(
  mapStateToProps,
  {onToggle: toggleTodo}
)(Todos))

export default TodoList