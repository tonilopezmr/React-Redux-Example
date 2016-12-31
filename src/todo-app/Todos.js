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
    if (currentFilter === filter) {
        return (<span>{children}</span>)
    }

    return (
        <a href="#" onClick={() => onFilter(filter)}>
            {children}
        </a>
    )
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

const TodoList = ({
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

const AddTodo = ({
    onAdd
}) => {
    let input
    return (
        <div>
            <input ref={node => input = node}
                   type="text"
                   placeholder="todo"/>
            <button onClick={() => {
                onAdd(input.value)
                input.value = ''
            }}>
                Add Todo
            </button>
        </div>
    )
}

class Todos extends Component {

    render() {
        const {
            todos,
            filter,
            onToggle,
            onAdd,
            setFilter
        } = this.props

        return (
            <div className="App">
                <AddTodo
                    onAdd={onAdd}
                />

                <h1>TODOS: </h1>
                <TodoList
                    todos={todosFilter(todos, filter)}
                    onToggle={onToggle}
                />

                Show:
                {' '}
                <FilterLink
                    onFilter={setFilter}
                    filter='SHOW_ALL'
                    currentFilter={filter}
                >
                    All
                </FilterLink>
                {' '}
                <FilterLink
                    onFilter={setFilter}
                    filter='SHOW_COMPLETED'
                    currentFilter={filter}
                >
                    Completed
                </FilterLink>
                {' '}
                <FilterLink
                    onFilter={setFilter}
                    filter='SHOW_UNCOMPLETED'
                    currentFilter={filter}
                >
                    Uncompleted
                </FilterLink>
            </div>
        )
    }

}

export default Todos