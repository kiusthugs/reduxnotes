//Function, returns type and payload

//Actions are the labels, reducers are the ones that make an action have an action

//action creator?
export const ADD = () => {
    return {
        //action
        type: 'ADD_TEN',
        payload: 0,
    }
}

export const MINUS = () => {
    return {
        type: 'MINUS_TEN',
        payload: 0,
    }
}