import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todo-app/Todos';
import './index.css';

import {createStore, combineReducers} from 'redux'
import todos from './todo-app/Todo.reducer'
import filter from './todo-app/VisibilityFilter.reducer'

const todoApp = combineReducers({
    todos,
    filter
})

const store = createStore(todoApp)

const onAdd = (text) => {
    store.dispatch({type: 'ADD_TODO', text: text})
}

const onToggle = (id) => {
    store.dispatch({type: 'TOGGLE_TODO', id: id})
}

const setFilter = (filter) => {
    store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter})
}

const render = () => {
    ReactDOM.render(
        <Todos
            {...store.getState()}
            onAdd={onAdd}
            onToggle={onToggle}
            setFilter={setFilter}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render)
render()