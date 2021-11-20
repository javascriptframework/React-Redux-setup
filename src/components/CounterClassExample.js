import React from 'react';
import { connect } from "react-redux";
import { incrementCounterAction, decrementCounterAction, setCounterAction, resetCounterAction, updateStudentName}  from '../actions/counterAction';

class CounterClassExample extends React.Component {
    constructor(props) {
        super(props)
    }

    incrementCount = () => {
        this.props.increaseCounter();
    }
    render() {
        return (
            <>
                <h2>Counter Class Component</h2>
                <div>The count value is {this.props.count}</div>
                <div>The student name is {this.props.studentName}</div>
                <button onClick={this.incrementCount}>Increment count</button>
                <button onClick={() => this.props.decreaseCounter()}>Decrement count</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      count: state.counter.count,
      studentName: state.student.studentName,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      increaseCounter: () => dispatch(incrementCounterAction()),
      decreaseCounter: () => dispatch(decrementCounterAction()),/* 
      updateFirstName: (firstName) => dispatch(updateFirstName(firstName)), */
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassExample);