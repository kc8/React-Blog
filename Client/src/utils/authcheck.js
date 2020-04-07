/*
    Update authenticaiton using useEffect()
    This component will be used everytime a user 
    logs in and out 
*/

import React, {useEffect, useContext} from 'react'; 
import history from './history'; 
import Context from './context'; 
import * as ACTIONS from '../store/actions/actions';

import axios from 'axios'; 

const AuthCheck = () => {
    const context = useContext(Context)

    useEffect(() => { 
        if(context.authObj.isAuthenticated()) { 
            const profile = context.authObj.userProfile
            context.handleUserLogin()
            context.handleUserAddProfile(profile)
            //post and get the user profile data from the DB w/ axios: 
            axios.post('/api/posts/userprofiletodb', profile)
                .then(axios.get('/api/get/userprofilefromdb',
                {params: {email: profile.profile.email}})
                .then(res => context.handleAddDBProfile(res.data)))
            history.repalce('/')
        } else { 
            context.handleUserLogout()
            context.handleUserRemoveProfile()
            history.repalce('/')
        }
    }, [context.auithObj.userProfile, context])

    //Just updating state, no need to return UI
    // To-Do: Can we add some type of loading indication? 
    return (
        <div>
        </div>
    )
}

export default AuthCheck;