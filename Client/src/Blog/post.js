/*
    Main page listing out all posts from date descending
*/

import React from 'react'
import * as Markdown from 'react-markdown';
import {GET_SINGLE_POST} from '../configuration';

class Post extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
                    pid: null, 
                    title: null, 
                    author: null, 
                    body: null
    }
    }

    //pass prop to get specific id? 
    componentDidMount(event) { 
        fetch(`${GET_SINGLE_POST}${this.props.match.params.id}`)
        .then(res => res.json())
        .then((data) => {
                this.setState({
                            pid: data[0].pid,
                            title: data[0].title, 
                            body: data[0].body,
                            author: data[0].author
                            })
        }, (error) => {
            console.log(error)
        });
    }

    componentWillUnmount() {
        //do something here
    }

        
    render() {
      return (
        <div id="main">
            <article className="post">
                <header>
                    <div className="title">
                        <h2>{this.state.title}</h2>
                        <p></p>
                    </div>
                    <div className="meta">
                        <time className="published" datetime="today">Date here</time>
                        <a href="#" className="author">
                            <span className="name">{this.state.author}</span>
                            <img alt="avatar"></img>
                        </a>
                    </div>
                </header>
            <span className="image featured">IMAGE HERE</span>
            <p><Markdown source={this.state.body} /></p>
            <footer></footer> 
        
        </article>
        </div>
      )
    }
  }

export default Post;