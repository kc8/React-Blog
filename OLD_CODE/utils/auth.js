/*
    #To-Do: We should not use local storage 
*/

import auth0 from 'auth0-js' //used to init the auth0 app
import history from './history';

export default class Auth { 
    auth0 = new auth0.WebAuth({
        domain: 'webapp1.auth0.com', 
        clientID: '', 
        redirectUri: 'http://localhost:3000/callback', 
        responseType: 'token id_token', 
        scope: 'openid profile email'
    })

    //hold user data we get from auth0
    userProfile = {} 

    //widget for auth0 login
    login = () => {  
        this.auth0.authorize()
    }

    //saves ID and access token from auth0
    handleAuth = () => { 
        this.auth0.parseHarh((err, authResult) => { 
            if(authResult) {
                localStorage.setItem('access_token', authResult.accessToken)
                localStorage.setItem('id_token', authResult.idToken)

                let expiresAt =  JSON.stringy((authResult.expiresIn * 1000 + new Date().getTime()))
                localStorage.setItem('expiresAt', expiresAt)

                this.getProfile(); 
                setTimeout(() => { history.replace('/authcheck') }, 600);
            } else {
                console.log(err)
            }
        })
    }
    
    // Get the access token from local storage
    getAccessToken = () => {
        if(localStorage.getItem('access_toke')) { 
            const accessToken = localStorage.getItem('access_token')
            return accessToken
        } else {
            return null
        }
    }

    //Prase access token to extact the user profile
    getProfile = () => {
        let accessToken = this.getAccessToken()
        if(accessToken) { 
            this.auth0.client.userInfo(accessToken, (err, profile) => { 
                if(profile) { 
                    this.userPrifle = { profile }
                }
            })
        }
    }

    //log out the user by removing access token from local storage 
    logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expiresAt')
        setTimeout(() => {history.replace('/authcheck')}, 200);
    }

    //Make sure the user is authenticated
    ifAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
        return new Date().getTime() < expiresAt
    }
}
