import "babel-polyfill"

import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Counter from './Counter';
import reducer from './reducers';
import rootSaga from './sagas';

class Root extends React.Component{
  render(){
    return(
      <Counter
        value={this.props.value}
        onIncrement={this.props.onIncrement}
        onDecrement={this.props.onDecrement}
        onIncrementAsync={this.props.onIncrementAsync} />
    );
  }
}

Root.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    value: state,
  }
}

function mapDispatchToProps(dispatch) {
  const action = type => dispatch({ type });
  const onIncrement = () => action('INCREMENT');
  const onDecrement = () => action('DECREMENT');
  const onIncrementAsync = () => action('INCREMENT_ASYNC');
  return bindActionCreators({ onIncrement, onDecrement, onIncrementAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
