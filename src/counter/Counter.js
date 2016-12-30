import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.props.onAdd}>
                        Add counter
                    </button>
                    <button onClick={this.props.onRemove}>
                        Remove counter
                    </button>
                </div>

                {this.renderCounters(
                    this.props.value,
                    this.props.onIncrement,
                    this.props.onDecrement
                )}
            </div>
        );
    }

    renderCounters(counters, onIncrement, onDecrement){
        return counters.map(
            (count, idx) => this.showCounter(count, idx, onIncrement, onDecrement)
        )
    }

    showCounter(counter, idx, onIncrement, onDecrement) {
        return (
            <div className="App-intro" key={idx} >
                <p>{counter}</p>
                <button onClick={() => {onIncrement(idx)}}>
                    +
                </button>
                <button onClick={() => {onDecrement(idx)}}>
                    -
                </button>
            </div>
        )
    }
}

export default Counter;
