import React, { Component } from 'react';
import './Blog.css';
import Post1 from './Posts/Post1';
import Post2 from './Posts/Post1';
import Post3 from './Posts/Post1';
import Blogpage from './Blogpage';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
        input: '',
        route: 'Blog',
        }
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        return (
            <div>
            <Blogpage
                onRouteChange={this.onRouteChange} 
            />
            <div className="Blog">
                { this.state.route === 'Post1' ? <Post1 onRouteChange={this.onRouteChange} />
                :  this.state.route === 'Post2' ? <Post2 onRouteChange={this.onRouteChange} />
                : ( this.state.route === 'Post3' ? <Post3 onRouteChange={this.onRouteChange} />
                : <div></div>
                    )
                }
            </div>
            </div>
        )
    }
}


export default Blog;