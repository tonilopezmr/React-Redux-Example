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
    console.log("onToggle id: "+ id)
    store.dispatch({type: 'TOGGLE_TODO', id: id})
}

const render = () => {
    ReactDOM.render(
        <Todos
            todos={store.getState().todos}
            onAdd={onAdd}
            onToggle={onToggle}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render)
render()