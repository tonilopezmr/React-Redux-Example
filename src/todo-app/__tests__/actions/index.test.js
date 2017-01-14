jest.mock('../../api')

import thunk from 'redux-thunk'
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions'
import * as types from '../../constants/actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions creators should', () => {

  it('creates ADD_TODO_SUCCESS when create a todo', () => {

    const expectedActions = [{
      type: types.ADD_TODO_SUCCESS,
      response: {
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
    }]

    const store = mockStore({})

    return store.dispatch(actions.addTodo('add todo'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})