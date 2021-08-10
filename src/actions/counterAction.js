export const incrementCounterAction = () => {
    return { type: 'INCREMENT_COUNT' }
}

export const decrementCounterAction = () => {
    return { type: 'DECREMENT_COUNT' }
}

export const resetCounterAction = () => {
    return { type: 'RESET_COUNT' }
}

export const setCounterAction = (count) => {
    return { type: 'SET_COUNT', payload: count}
}

