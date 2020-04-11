/*
    Main page listing out all posts from date descending
*/

import React from 'react'
import * as Markdown from 'react-markdown';
import {GET_SINGLE_POST} from '../configuration';

function displayProps(props) {
    console.log('propls: ', props.children)
}

class Post extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
                    pid: null, 
                    title: null, 
                    author: null, 
                    body: null,
                    date: null
    }
    }

    //pass prop to get specific id? 
    componentDidMount(event) { 
        let url = `${GET_SINGLE_POST}${this.props.match.params.id}/?format=json`
        fetch(url)
        .then(res => res.json())
        .then((data) => {
                this.setState({
                            pid : data.id,
                            title: data.blog_title, 
                            body: data.blog_body,
                            author: data.blog_author,
                            date: data.blog_date_created
                            })
        }, (error) => {
            console.log(error)
        });
    }

    componentWillUnmount() {
        //do something here
    }

    formatDate() { 

    }

    /* changed the <p></p> tage in the markdown source body to article as there 
    was an error message. 
    {image: (props) => {
                        return <span class="image-fluid"><img src={props.children} alt="blog image"></img></span>}}
                        }
    */
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
                        <time className="published" dateTime="today">
                            {this.state.date}
                        </time>
                        <a href="https://www.linkedin.com/in/kylejacksoncooper/" className="author">
                            <span className="name">{this.state.author}</span>
                            <img alt="avatar"></img>
                        </a>
                    </div>
                </header>
            <article>
                <Markdown 
                    source={this.state.body}
                    renderers={{image : (props) => 
                        <span class="image featured"><img src={props.src} alt="blog image"></img></span>}}
                        />
            </article>
            <footer></footer> 
        </article>
        </div>
      )





    }
  }

export default Post;