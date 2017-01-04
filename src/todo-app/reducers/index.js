import {combineReducers} from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import * as filter from '../constants/filterTypes'

const listByFilter = combineReducers({
  'all': createList(filter.ALL),
  'completed': createList(filter.ALL),
  'uncompleted': createList(filter.UNCOMPLETED)
})

const todos = combineReducers({
  byId,
  listByFilter
})

export default todos

export const todosFilter = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])