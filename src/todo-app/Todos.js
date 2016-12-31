'use strict'

import React, {Component} from 'react'
import './Todos.css'

import todosFilter from './TodosFilter'

const FilterLink = ({
    filter,
    currentFilter,
    children,
    onFilter
}) => {
    if(currentFilter === filter) {
        return (<span>{children}</span>)
    }

    return (
        <a href="#" onClick={() => onFilter(filter)}>
            {children}
        </a>
    )
}

class Todos extends Component {

    render() {
        const {
            todos,
            filter
        } = this.props

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
                    {this.renderTodos(todosFilter(todos, filter), this.props.onToggle)}
                </ul>

                Show:
                {' '}
                <FilterLink
                    onFilter={this.props.setFilter}
                    filter='SHOW_ALL'
                    currentFilter={filter}
                >
                    All
                </FilterLink>
                {' '}
                <FilterLink
                    onFilter={this.props.setFilter}
                    filter='SHOW_COMPLETED'
                    currentFilter={filter}
                >
                    Completed
                </FilterLink>
                {' '}
                <FilterLink
                    onFilter={this.props.setFilter}
                    filter='SHOW_UNCOMPLETED'
                    currentFilter={filter}
                >
                    Uncompleted
                </FilterLink>
            </div>
        )
    }

    renderTodos(todos, onToggle) {
        return todos.map(todo =>
            (<li key={todo.id} onClick={() => onToggle(todo.id)}>{this.hasCompleted(todo)}</li>))
    }

    hasCompleted(todo) {
        if (!todo.completed) {
            return todo.text
        }

        return (<span className="Todo-completed">{todo.text}</span>)
    }
}

export default Todos