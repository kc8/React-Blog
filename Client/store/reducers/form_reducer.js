/*
    Reducer tracks the state/changes of the input for
    the form
*/

import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
    user_textChange: '', 
    user_textSubmit: '',
}

export const FormReducer = (state, action) => { 
    switch(action.type) { 
        case ACTION_TYPES.USER_INPUT_CHANGE: 
            return { 
                ...state,
                user_textChange: action.payload
            }
        case ACTION_TYPES.USER_INPUT_SUBMIT: 
            return {
                ...state, 
                user_textSubmit
            }
        default: 
            throw new Error();
    }
}
