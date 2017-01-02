import React, {Component} from 'react'
import {connect} from 'react-redux'

import todosFilter from '../reducers/todosFilter'
import { toggleTodo } from '../actions'

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

const mapStateToProps = (state, ownProps) => ({
  todos: todosFilter(state.todos, ownProps.filter)
})

const mapDispatchToProps = (dispatch) => ({
  onToggle(id) {
    dispatch(toggleTodo(id))
  }
})

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodoList