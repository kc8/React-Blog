/*
To-Do: Remove some of the properties notbeing used

*/

import React, { useReducer } from 'react';
import Context from './utils/context'; 
import * as ACTIONS from './store/actions/actions';

import * as Reducer1 from './store/reducers/plain_reducer'; 
import * as AuthReducer from './store/reducers/auth_reducer'; 
import * as FormReducer from './store/reducers/form_reducer'; 
import Routes from './routes'; 

import Auth from './utils/auth';

const auth = new Auth(); //init class from auth.js 

const ContextState = () => { 
    //Plain Reducer
    const [stateReducer1, dispatchReducer1] = useReducer(
                                                    Reducer1.Reducer1, 
                                                    Reducer1.initialState)
    
    const handleDisptachTrue = () => {
        dispatchReducer1(ACTIONS.success())
    }
    
    const handleDispatchFalse = () => {
        dispatchReducer1(ACTIONS.failure())
    }

    //auth reducer
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.Auth, 
                                                                AuthReducer.initialState)
    
    const handleLogin = () => { 
        dispatchAuthReducer(ACTIONS.login_success())
    }

    const handleAddProfile = (profile) => { 
        dispatchAuthReducer(ACTIONS.login_failure())
    }

    const handleRemoveProfile = () => {
        dispatchAuthReducer(ACTIONS.remove_profile())
    }
    
    //Form Reducer

    const [stateFormReduer, dispatchAuthReducer] = useReducer(FormReducer.FormReducer, 
                                                                FormReducer.initialState)

    const handleFormChange = (event) => {
        dispatchFormReducer(ACTIONS.user_input_change(event.target.value))
    };

    const handleFormSubmit = (event) => {
        dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value))
        event.preventDefault(); 
        event.persist(); 
    }

    const handleAuthentication = (props) => { 
        if(props.location.hash) { 
            auth.handleAuth()
        }
    }

    return(
        <div> 
            <Context.Provider
                value={{
                    //Reducer1
                    stateProp1: stateReducer1.stateprop1,
                    stateProp2: stateReducer1.stateprop2, 
                    dispatchContextFalse: () => handleDispatchFalse(),
                    dispatchContextTrue: () => handleDisptachTrue(),

                    //Form Reducer
                    useContextChangeState: stateFormReduer.user_textChange, 
                    useContextSubmitState: stateFormReduer.user_textSubmit, 
                    useContextSubmit: (event) => handleFormSubmit(event), 
                    useContextChange: (event) => handleFormChange(event), 

                    //Auth Reducer
                    authState: stateAuthReducer.is_authenticated, 
                    profileState: stateAutheReducer.profile,
                    handleUserLogin: () => handleLogin(),
                    handleUserLogout: () => handleLogout(), 
                    handleUserAddProfile: (profile) => handleAddProfile(profile),
                    handleUserRemoveProfile: () => handleRemoveProfile(), 

                    //handle auth

                    handleAuth: (props) => handleAuthentication(props), 
                    authObj: auth
                }} 
                > 
                    <Routes />
                </Context.Provider> 
                </div>
    )
}

export default ContextState;