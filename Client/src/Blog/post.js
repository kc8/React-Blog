/*
    Main page listing out all posts from date descending
*/

import React from 'react'

class Post extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
                    pid: '', 
                    title: '', 
                    user_id: '', 
                    auther: '', 
                    body: ''
    }
    }

    //pass prop to get specific id? 
    componentDidMount(event) { 

    }

    componentWillUnmount() {
        //do something here
    }

    render() {
      return (
        <div>
        Specific post: 
        </div>
      )
    }
  }

export default Post;