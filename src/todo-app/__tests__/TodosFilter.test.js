'use strict'

const expect = require('expect')
const deepFreeze = require('deep-freeze')

import todosFilter from '../todosFilter'

describe('TodoApp filter should', () => {
  it('show all when the filter is SHOW_ALL', () => {
    const stateBefore = [{
      id: 0,
      text: 'Add filter',
      completed: true
    }, {
      id: 1,
      text: 'Learn redux',
      completed: false
    }]

    deepFreeze(stateBefore)

    expect(
      todosFilter(stateBefore, 'SHOW_ALL')
    ).toEqual(stateBefore)
  })

  it('show completed todos', () => {
    const stateBefore = [{
      id: 0,
      text: 'Add filter',
      completed: true
    }, {
      id: 1,
      text: 'Learn redux',
      completed: false
    }]
    const stateAfter = [{
      id: 0,
      text: 'Add filter',
      completed: true
    }]

    deepFreeze(stateBefore)

    expect(
      todosFilter(stateBefore, 'SHOW_COMPLETED')
    ).toEqual(stateAfter)
  })

  it('show uncompleted todos', () => {
    const stateBefore = [{
      id: 0,
      text: 'Add filter',
      completed: true
    }, {
      id: 1,
      text: 'Learn redux',
      completed: false
    }]
    const stateAfter = [{
      id: 1,
      text: 'Learn redux',
      completed: false
    }]

    deepFreeze(stateBefore)

    expect(
      todosFilter(stateBefore, 'SHOW_UNCOMPLETED')
    ).toEqual(stateAfter)
  })
})