const expect = require('expect')
const deepFreeze = require('deep-freeze')

import {todosFilter} from '../reducers'
import {ALL, COMPLETED, UNCOMPLETED} from '../constants/filterTypes'

describe('TodoApp filter should', () => {
  it('show all when the filter is all', () => {
    const stateBefore = {
      byId: {
        0: {
          id: '0',
          text: 'Add filter',
          completed: true
        },
        1: {
          id: '1',
          text: 'Learn redux',
          completed: false
        }
      },
      listByFilter: {
        'all': {
          ids: [0, 1]
        }
      }
    }
    const result = [{
      id: '0',
      text: 'Add filter',
      completed: true
    }, {
      id: '1',
      text: 'Learn redux',
      completed: false
    }]

    deepFreeze(stateBefore)

    expect(
      todosFilter(stateBefore, ALL)
    ).toEqual(result)
  })

  it('show completed todos', () => {
    const stateBefore = {
      byId: {
        0: {
          id: '0',
          text: 'Add filter',
          completed: true
        },
        1: {
          id: '1',
          text: 'Learn redux',
          completed: false
        }
      },
      listByFilter: {
        'completed': {
          ids: [0]
        }
      }
    }
    const result = [{
      id: '0',
      text: 'Add filter',
      completed: true
    }]

    deepFreeze(stateBefore)

    expect(
      todosFilter(stateBefore, COMPLETED)
    ).toEqual(result)
  })

  it('show uncompleted todos', () => {
    const stateBefore = {
      byId: {
        0: {
          id: '0',
          text: 'Add filter',
          completed: true
        },
        1: {
          id: '1',
          text: 'Learn redux',
          completed: false
        }
      },
      listByFilter: {
        'uncompleted': {
          ids: [1]
        }
      }
    }
    const result = [{
      id: '1',
      text: 'Learn redux',
      completed: false
    }]

    deepFreeze(stateBefore)

    expect(
      todosFilter(stateBefore, UNCOMPLETED)
    ).toEqual(result)
  })
})