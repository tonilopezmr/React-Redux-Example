import {combineReducers} from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
  'all': createList('all'),
  'completed': createList('completed'),
  'uncompleted': createList('uncompleted')
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