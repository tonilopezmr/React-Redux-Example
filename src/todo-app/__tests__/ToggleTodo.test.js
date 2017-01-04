'use strict'

const expect = require('expect')
const deepFreeze = require('deep-freeze')

import todo from '../reducers/index'

describe('todo should do', () => {

  it('add new todo', () => {
    const stateBefore = []
    const stateAfter = [{
      id: 0,
      text: 'Do more sport',
      completed: false
    }]

    deepFreeze(stateBefore)

    expect(
      todo(stateBefore, {type: 'ADD_TODO', text: 'Do more sport'})
    ).toEqual(stateAfter)
  })

  it('assign correct id when new todo', () => {
    const stateBefore = [{
      id: 0,
      text: 'Do more sport',
      completed: false
    }]
    const stateAfter = [{
      id: 0,
      text: 'Do more sport',
      completed: false
    }, {
      id: 1,
      text: 'Learn more architecture',
      completed: false
    }]

    deepFreeze(stateBefore)

    expect(
      todo(stateBefore, {type: 'ADD_TODO', text: 'Learn more architecture'})
    ).toEqual(stateAfter)
  })

  it('remove todo', () => {
    const stateBefore = [{
      id: 3,
      text: 'Learn redux',
      completed: true
    }]
    const stateAfter = []

    deepFreeze(stateBefore)

    expect(
      todo(stateBefore, {type: 'REMOVE_TODO', id: 3})
    ).toEqual(stateAfter)
  })

  it('toggle todo', () => {
    const stateBefore = [{
      id: 1,
      text: 'Learn redux',
      completed: true
    }, {
      id: 2,
      text: 'Learn react',
      completed: false
    }]
    const stateAfter = [{
      id: 1,
      text: 'Learn redux',
      completed: true
    }, {
      id: 2,
      text: 'Learn react',
      completed: true
    }]

    deepFreeze(stateBefore)

    expect(
      todo(stateBefore, {type: 'TOGGLE_TODO', id: 2})
    ).toEqual(stateAfter)
  })
})