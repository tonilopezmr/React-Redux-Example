'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import todosFilter from './TodosFilter'
import toggleTodo from './actions/ToggleTodo'

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

const mapStateToProps = (state) => {
  return {
    todos: todosFilter(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodoList