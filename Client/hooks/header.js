/*
    Links to our components
*/
import React, {useContext} from 'react';
import { link } from 'react-router-dom'; 
import Context from '../utils/context';

const Header = () => { 
    const context = useContext(Context)

    return( 
        <div> 
            <link to='/' style={{padding: '5px'}}> 
            Home
            </link>
            <link to='/profile' style={{padding: '5px'}}> 
            Profile
            </link>
            <link to='/hooksform' style={{padding: '5px'}}> 
            Hooks form
            </link>
            <link to='/hookscontainer' style={{padding: '5px'}}> 
            Hooks Container
            </link>
            <link to='/privateroute' style={{padding: '5px'}}> 
            Private Route
            </link>
            {!context.authState 
            ? <button onClick={() => context.authObj.login()}>Login</button>
            :  <button onClick={() => context.authObj.logout()}>Logout</button>
            }
        </div>
    )};

export default Header;