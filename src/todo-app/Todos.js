'use strict'

import React, {Component} from 'react'
import './Todos.css'

class Todos extends Component {

    render(){
        return (
            <div className="App">
                <input ref={node => this.input = node}
                       type="text"
                       placeholder="todo"/>
                <button onClick={() => {
                    this.props.onAdd(this.input.value)
                    this.input.value = ''
                }}>
                    Add Todo
                </button>

                <h1>TODOS: </h1>
                <ul>
                {this.renderTodos(this.props.todos, this.props.onToggle)}
                </ul>
            </div>
        )
    }

    renderTodos(todos, onToggle) {
        return todos.map(todo =>
            (<li key={todo.id} onClick={() => onToggle(todo.id)}>{this.hasCompleted(todo)}</li>))
    }

    hasCompleted(todo) {
        if(!todo.completed) {
            return todo.text
        }

        return (<span className="Todo-completed">{todo.text}</span>)
    }
}

export default Todos