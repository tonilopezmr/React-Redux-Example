'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import addTodo from './actions/AddTodo'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <input ref={node => input = node}
             type="text"
             placeholder="todo"/>
      <button onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo