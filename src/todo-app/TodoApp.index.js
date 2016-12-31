import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todo-app/Todos';
import './TodoApp.index.css';

import {createStore} from 'redux'
import todo from './Todo.reducer'

const store = createStore(todo)

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
            todos={store.getState()}
            onAdd={onAdd}
            onToggle={onToggle}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render)
render()