import React, {Component} from 'react'

import '../TodoApp.css';

import FilterLink from './FilterLink'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Footer = () => (
  <div>
    Show:
    {' '}
    <FilterLink filter='all'>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
    {' '}
    <FilterLink filter='uncompleted'>
      Uncompleted
    </FilterLink>
  </div>
)

class TodoApp extends Component {
  render() {
    const {
      params
    } = this.props
    return (
      <div className="App">
        <AddTodo />
        <br/>
        <TodoList
          filter={params.filter || 'all'}
        />
        <br/>
        <Footer />
      </div>
    )
  }
}

export default TodoApp