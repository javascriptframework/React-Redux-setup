const INITIAL_STATE = {
    count: 0
}

const incrementCount = (prevState, action) => {    
    return {
        count: prevState.count + 1,
    };    
}

const decrementCount = (prevState, action) => {
    return {
        count: prevState.count - 1,
    }; 

}

const setCount = (prevState, action) => {
    const { payload } = action;
    if(payload) {
        return {
            count: payload
        }
    }
    return prevState;
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT': return incrementCount(state, action);
        case 'DECREMENT_COUNT': return decrementCount(state, action);
        case 'RESET_COUNT': return { count: 0 };
        case 'SET_COUNT': return setCount(state, action);
        default: return state;
    }
}

export default counterReducer;