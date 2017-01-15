jest.mock('../../api')

import thunk from 'redux-thunk'
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions'
import * as types from '../../constants/actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('action creators', () => {

  describe('addTodo should return', () => {

    it('type ADD_TODO_SUCCESS', () => {
      const store = mockStore({})

      return store.dispatch(actions.addTodo('add todo'))
        .then(() => {
          expect(store.getActions()[0].type).toEqual(types.ADD_TODO_SUCCESS)
        })
    })

    it('normalized response', () => {

      const expectedResponse = {
        result: '11-id',
        entities: {
          todos: {
            '11-id': {
              id: '11-id',
              text: 'add todo',
              completed: false
            }
          }
        },
      }

      const store = mockStore({})

      return store.dispatch(actions.addTodo('add todo'))
        .then(() => {
          expect(store.getActions()[0].response).toEqual(expectedResponse)
        })
    })

    it('only two elements', () => {
      const store = mockStore({})

      return store.dispatch(actions.addTodo('add todo'))
        .then(() => {
          var action = store.getActions()[0];
          expect(Object.keys(action).length).toEqual(2)
        })
    })
  })

})