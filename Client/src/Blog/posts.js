/*
Page for a single post
*/
import React from 'react';
//import {Link} from 'react-router-dom'; //future use
import {POST_ALL_QUERY} from '../configuration';

class Post extends React.Component{
    constructor(props, history) {
      super(props);
      this.state = {
                    posts: [],
                    }
    }

    componentDidMount(event) { 
        fetch(POST_ALL_QUERY)
        .then(res => res.json())
        .then((data) => {
                this.setState({posts: data})
        }, (error) => {
            console.log(error)
        });
    }

    componentWillUnmount() {
        //future use
    }

    displayPosts() { 
        return this.state.blog_title
    }

    diplaySinglePost() {
        return "Not implemented"
    }

    handleClick = (event) => { 
        const {history} = this.props; 
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
                    <div className="title"><h2>{post.blog_title}</h2>
                    <p>{post.blog_short_desc}</p>
                    </div>
                </header>
                <footer>
                    <ul className="actions">
                        <li>
                        <button
                             className="button large"
                             value={post.id} 
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