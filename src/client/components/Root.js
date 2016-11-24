import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {onIncrement, onDecrement, onIncrementAsync} from '../actions';
import Counter from './Counter';

class Root extends React.Component{
  render(){
    return (
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
};

function mapStateToProps(state) {
  return {
    value: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onIncrement, onDecrement, onIncrementAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
