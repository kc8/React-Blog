/*
Page for a single post
*/
import React from 'react';
import axios from 'axios'
import {POST_ALL_QUERY} from '../configuration';

class Post extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
                    posts: [],
                    title: ''
                    }
    }

    componentDidMount(event) { 
        fetch(POST_ALL_QUERY)
        .then(res => res.json())
        .then((data) => {
                this.setState({posts: data})
            console.log("DATA DATA:", data)
        }, (error) => {
            console.log(error)
        });
        console.log("THIS IS STATE: ", this.state.title)
    }

    componentWillUnmount() {
        //do something here
    }

    displayPosts() { 
        return this.state.title
    }

    diplaySinglePost() {
        return "Not implemented"
    }

    render() {
      return (
        <div>
            {this.state.posts.map((post) =>  (
                <div>
                <h2> Title: {post.title} </h2>
                <p>Short Desc : {post.short_desc}</p>
                <a href={`/${post.pid}`}>Read More...</a>
                </div>

            ))}
        </div>
      )
    }
  }
  
/*
function Post() { 


                   this.setState({ 
                    posts : data.map(item => ({
                        title: "IS THIS WORKING"
                    })),
                    notempty: "empty"
                });

posts : data.map(item => ({
                        title: item,
                        body: item.body
                    })


    fetch(queryString)
    .then(data => data.json())
    .then(data => { 
        this.setState({ 
            posts: data
        })
    })

    return ( 
        <div>
        this something
        </div>
    );
}*/

export default Post; 