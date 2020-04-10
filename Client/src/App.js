import { Route, Switch } from 'react-router-dom';
import React from 'react'; 
import Header from './layout/header'
import Post from './blog/post'
import Posts from './blog/posts'
import About from './blog/about';
import Footer from './layout/footer';
import NotFound from './partials/404.js';

function App() {  
    
    return (
        <main>
        <Header />
            <Switch>
                <Route path='/' component={Posts} exact />
                <Route path='/about' component={About} /> 
                <Route path='/post/:id' component={Post} />
                <Route component={NotFound} />
            </Switch>
        <Footer />
        </main> 
    )
}

export default App; 