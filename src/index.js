import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';

import {createStore} from 'redux'
import counter from './CounterCollection.reducer'

const store = createStore(counter)

const onIncrement = (idx) => {
    store.dispatch({ type: 'INCREMENT', index: idx})
}

const onDecrement = (idx) => {
    store.dispatch({ type: 'DECREMENT', index: idx})
}

const onAdd = () => {
    store.dispatch({type: 'ADD'})
}

const onRemove = () => {
    var length = store.getState().length;
    store.dispatch({type: 'REMOVE', index: length === 0? 0 : length - 1})
}

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onAdd={onAdd}
            onRemove={onRemove}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render)
render()