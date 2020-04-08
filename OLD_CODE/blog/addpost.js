import React, { userContext } from 'react';
import axios from 'axios'; 

import History from '../utils/history';
import Context from '../utils/context';
import TextField from '@material-ui/core/TextField';

const AddPost = () => { 
    const context = userContext(Context)

    const handleSubmit = (event) => { 
        event.preventDefault()
        const user_id = context.dbPorfileState[0].uid
        const username = context.dbProfileState[0].username
        const data = {
                        title: event.target.title.value,
                        body: event.target.body.value, 
                        username: username, 
                        uid: user_id
                     }
        axio.post('/api/post/posttodb', data)
        .then(repost => console.log(resonse))
        .catch( (err) => console.log(err))
        .then(setTimeout( () => history.replace('/'), 700))
    
    }
    //To-Do: Need to sanatize user input
    return ( 
        <div>
            <form onSubmit={handleSubmit}> 
            <TextField
                id='title'
                label='Title'
                margin='nomral'
            />
            <br />
            <TextField
                id='body'
                label="Body"
                multiline
                rowsmax='4'
                margin='normal'
            />
            <button type='submit'>Submit</button>
            </form>
            <br /> 
            <button onClick={() => history.replace('/posts')}>Cancel</button>
        </div>
    )
}