const expect = require('expect')
const deepFreeze = require('deep-freeze')

import {createIds} from '../../reducers/createList'
import {ALL, COMPLETED, UNCOMPLETED} from '../../constants/filterTypes'
import * as types from '../../constants/actionTypes'

/**
 * I want to know that give a state with a filter, it returns a correct result
 */

describe('createList', () => {

  describe('createIds', () => {

    describe('when TOGGLE_TODO_SUCCESS should', () => {

      it('removed to UNCOMPLETED filter when toggled', () => {
        const uncompletedTodosState = ['0', '1']
        const action = {
          type: types.TOGGLE_TODO_SUCCESS,
          response: {
            result: '0',
            entities: {
              todos: {
                '0': {
                  id: '0',
                  text: 'dummy',
                  completed: true
                }
              },
              filter: UNCOMPLETED
            }
          }
        }
        const expectedTodosState = ['1']

        deepFreeze(uncompletedTodosState)

        expect(
          createIds(UNCOMPLETED)(uncompletedTodosState, action)
        ).toEqual(expectedTodosState)
      })

      it('removed to COMPLETED filter when toggled', () => {
        const completedTodosState = ['0', '1']
        const action = {
          type: types.TOGGLE_TODO_SUCCESS,
          response: {
            result: '0',
            entities: {
              todos: {
                '0': {
                  id: '0',
                  text: 'dummy',
                  completed: false
                }
              },
              filter: COMPLETED
            }
          }
        }
        const expectedTodosState = ['1']

        deepFreeze(completedTodosState)

        expect(
          createIds(COMPLETED)(completedTodosState, action)
        ).toEqual(expectedTodosState)
      })

      it('return the same state when toggle todo in ALL filter', () => {
        const stateBefore = ['0', '1']
        const action = {
          type: types.TOGGLE_TODO_SUCCESS,
          response: {
            result: '0',
            entities: {
              todos: {
                '0': {
                  id: '0',
                  text: 'dummy',
                  completed: false
                }
              },
              filter: ALL
            }
          }
        }
        const expectedTodosState = ['0', '1']

        deepFreeze(stateBefore)

        expect(
          createIds(ALL)(stateBefore, action)
        ).toEqual(expectedTodosState)
      })
    })

    describe('when FETCH_TODOS_SUCCESS should', () => {

      it('return all todos when action filter is the same than the list filter', () => {
        const stateBefore = []
        const action = {
          type: types.FETCH_TODOS_SUCCESS,
          response: {
            result: ['0', '1', '2']
          },
          filter: ALL
        }
        const stateAfter = ['0', '1', '2']

        deepFreeze(stateBefore)

        expect(
          createIds(ALL)(stateBefore, action)
        ).toEqual(stateAfter)
      })

      it('return same state when action filter is distinct than the list filter', () => {
        const stateBefore = ['11']
        const action = {
          type: types.FETCH_TODOS_SUCCESS,
          response: {
            result: ['0', '1', '2']
          },
          filter: UNCOMPLETED
        }
        const stateAfter = ['11']

        deepFreeze(stateBefore)

        expect(
          createIds(ALL)(stateBefore, action)
        ).toEqual(stateAfter)
      })
    })

    describe('when ADD_TODO_SUCCESS should', () => {

      it('add new todo', () => {
        const stateBefore = ['0']
        const action = {
          type: types.ADD_TODO_SUCCESS,
          response: {
            result: '1'
          },
          filter: ALL
        }
        const stateAfter = ['0', '1']

        deepFreeze(stateBefore)

        expect(
          createIds(ALL)(stateBefore, action)
        ).toEqual(stateAfter)
      })

      it('not add new todo when completed filter', () => {
        const stateBefore = ['0']
        const action = {
          type: types.ADD_TODO_SUCCESS,
          reponse: {
            result: '1'
          },
          filter: COMPLETED
        }
        const stateAfter = ['0']

        deepFreeze(stateBefore)

        expect(
          createIds(COMPLETED)(stateBefore, action)
        ).toEqual(stateAfter)
      })

    })

  })

})
