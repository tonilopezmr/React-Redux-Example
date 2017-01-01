import React, {Component} from 'react'

import '../TodoApp.css';

import FilterLink from './FilterLink'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Footer = () => (
  <div>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_UNCOMPLETED'>
      Uncompleted
    </FilterLink>
  </div>
)

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <br/>
        <TodoList />
        <br/>
        <Footer />
      </div>
    )
  }
}

export default TodoApp