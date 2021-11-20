import { useSelector, useDispatch } from "react-redux";
import { incrementCounterAction, decrementCounterAction, setCounterAction, resetCounterAction, updateStudentName}  from '../actions/counterAction';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const studentName = useSelector(state => state.student.studentName)
    const dispatch = useDispatch();
    const incrementCounter = () => {
       dispatch(incrementCounterAction())        
    }

    const decrementCounter = () => {
        dispatch(decrementCounterAction());
    }

    const setCount = (e) => {
        dispatch(setCounterAction(parseInt(e.target.value)));
    }
    const resetCounter = () => {
        dispatch(resetCounterAction());
    }

    const updateStudetName = (e) => {
        dispatch(updateStudentName(e.target.value))
    }
    return (
        <div>
            <div>Counter Component</div>
            <div><h2>The count value is {count}</h2></div>
            <div><button onClick={incrementCounter}>Increment Counter</button></div>
            <div><button onClick={decrementCounter}>Decrement Counter</button></div>
            <div><button onClick={resetCounter}>Reset Counter</button></div>
            <div>Set Count: <input type="number"  onChange={setCount}/></div>
            <div><input type="text"  onChange={updateStudetName}/></div>
        </div>
    )
}

export default Counter;