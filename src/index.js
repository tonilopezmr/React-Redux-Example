import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';

import {createStore} from 'redux'
import counter from './counter.reducer'

const store = createStore(counter)

function onIncrement() {
    store.dispatch({ type: 'INCREMENT'})
}

function onDecrement() {
    store.dispatch({ type: 'DECREMENT'})
}

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render)
render()