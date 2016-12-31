'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <input ref={node => input = node}
             type="text"
             placeholder="todo"/>
      <button onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          text: input.value
        })
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo