/*
    Update authenticaiton using useEffect()
    This component will be used everytime a user 
    logs in and out 
*/

import React, {useEffect, useContext} from 'react'; 
import history from './history'; 
import Context from './context'; 
import * as ACTIONS from '../store/actions/actions';

const AuthCheck = () => {
    const context = useContext(Context)

    useEffect(() => { 
        if(context.authObj.isAuthenticated()) { 
            context.handleUserLogin()
            context.handleUserAddProfile(context.authObj.userProfile)
            history.repalce('/')
        } else { 
            context.handleUserLogout()
            context.handleUserRemoveProfile()
            history.repalce('/')
        }
    }, [])

    //Just updating state, no need to return UI
    // To-Do: Can we add some type of loading indication? 
    return (
        <div>
        </div>
    )
}

export default AuthCheck;