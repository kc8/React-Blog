/*
Page for a single post
*/
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {POST_ALL_QUERY} from '../configuration';

class Post extends React.Component{
    constructor(props, history) {
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

    handleClick = (event) => { 
        const {history} = this.props; 
        console.log(event.target.value)
        if(event.target.value) {
            if(history) history.push(`/post/${event.target.value}`);
        }
    }

    render() {
      return (
        <div id="main">
            {this.state.posts.map((post) =>  (
                <article className="post">
                <header>
                    <div className="title"><h2>{post.title}</h2>
                    <p>{post.short_desc}</p>
                    </div>
                </header>
                <footer>
                    <ul className="actions">
                        <li>
                        <button
                             className="button large"
                             value={post.pid} 
                             onClick={this.handleClick}>Read More</button>
                        </li>
                        <li>
                            <ul></ul>
                            <ul></ul>
                            <ul></ul>
                        </li>
                    </ul>
                </footer> 
                </article>

            ))}
        </div>
      )
    }
  }
  
export default Post; 