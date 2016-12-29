import React, {Component} from 'react';
import './App.css';

class Counter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <p>{this.props.value}</p>
                <button onClick={this.props.onDecrement}>
                    -
                </button>
                <button onClick={this.props.onIncrement}>
                    +
                </button>
            </div>
        );
    }
}

export default Counter;
