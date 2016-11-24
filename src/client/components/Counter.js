/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <button onClick={this.props.onIncrement.bind(this)}>
          Increment
        </button>
        {' '}
        <button onClick={this.props.onDecrement.bind(this)}>
          Decrement
        </button>
        {' '}
        <button onClick={this.props.onIncrementAsync.bind(this)}>Increment after 1 second</button>
        <hr />
        <div>Clicked: {this.props.value} times</div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;
