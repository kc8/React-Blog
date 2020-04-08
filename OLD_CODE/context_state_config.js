/*
To-Do: Remove some of the properties notbeing used

*/

import React, { useReducer } from 'react';
import Context from './utils/context'; 
import * as ACTIONS from './store/actions/actions';

import * as Reducer1 from './store/reducers/plain_reducer'; 
import * as AuthReducer from './store/reducers/auth_reducer'; 
import * as FormReducer from './store/reducers/form_reducer'; 
import * as PostsReducer from './store/reducers/posts_reducer';
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
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, 
                                                                AuthReducer.initialState)
    
    const handleLogin = () => { 
        dispatchAuthReducer(ACTIONS.login_success())
    }
    const handleLogout = () => {
        dispatchAuthReducer(ACTIONS.login_failure())
    }

    const handleAddProfile = (profile) => { 
        dispatchAuthReducer(ACTIONS.login_failure())
    }

    const handleRemoveProfile = () => {
        dispatchAuthReducer(ACTIONS.remove_profile())
    }
    
    const handleDBProfile = (profile) => { 
        dispatchAuthReducer(ACTIONS.set_db_profile(profile)) //changed function name from dispatchAuth to dispatchAuthReducer
    }

    const handleRemoveDBProfile = () => {
        dispatchAuthReducer(ACTIONS.remove_db_profile()) //changed function name from dispatchAuth to dispatchAuthReducer
    }
    //Form Reducer

    const [stateFormReduer, dispatchFormReducer] = useReducer(FormReducer.FormReducer, 
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

    //post reducer

    const [statePostsReducer, dispatchPosts] = useReducer(PostsReducer.PostsReducer, 
                                                        PostsReducer.initialState) //mightr be a missing parm here

    const handleSetPosts = (posts) => { 
        dispatchPosts(ACTIONS.set_db_posts(posts))
    }

    const handleRemovePosts = (posts) => {
        dispatchPosts(ACTIONS.remove_db_posts())
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
                    profileState: stateAuthReducer.profile,
                    handleUserLogin: () => handleLogin(),
                    handleUserLogout: () => handleLogout(), 
                    handleUserAddProfile: (profile) => handleAddProfile(profile),
                    handleUserRemoveProfile: () => handleRemoveProfile(), 

                    //handle auth

                    handleAuth: (props) => handleAuthentication(props), 
                    authObj: auth,
                    dbProfileState: stateAuthReducer.db_profile, 
                    handleAddDBProfile: (profile) => handleDBProfile(profile), 
                    handleRemoveDBProfile: () => handleRemoveDBProfile(), 

                    //posts state
                    postsState: statePostsReducer.posts, 
                    handleAddPost: (posts) => handleSetPosts(posts), 
                    handleRemovePosts: () => handleRemovePosts()
                }} 
                > 
                    <Routes />
                </Context.Provider> 
                </div>
    )
}

export default ContextState;