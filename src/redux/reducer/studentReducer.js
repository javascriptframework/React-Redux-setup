const initial_state = {
    studentName: 'Mary',
    studentId: 1,
    collegeName: 'Oxford'
}

const updateStudentName = (prevState, action) => {
    console.log('update')
    const { payload } = action;
    console.log(payload);
    if(payload) {
    return {
        ...prevState,
        studentName: payload.studentName,
        city: payload.city,
    }
    } else {
        return prevState;
    }
}

const updateStudentId= (prevState, action) => {
    return prevState
}
const studentReducer = (state=initial_state, action) => {
    switch(action.type) {
    case 'UPDATE_STUDENT_NAME' : return updateStudentName(state,action);
    case 'UPDATE_STUDENT_ID': return updateStudentId(state,action);
    default: return state;
    }
}

export default studentReducer;