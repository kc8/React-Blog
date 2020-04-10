import React from 'react';
//import {Link} from 'react-router-dom';// future use

function Footer() {
    return (<div> 
            <section id="footer">
            <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">cooperkyle.com</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">github</span></a></li>
                <li><a href="https://www.hackerrank.com/kyle23" className="icon brands fa-instagram"><span className="label">linkedin</span></a></li>
                <li><a href="https://www.linkedin.com/in/kylejacksoncooper/" className="icon brands fa-instagram"><span className="label">linkedin</span></a></li>
                <li><a href="mailto:kyle@cooperkyle.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
            </ul>
        </section>          
    </div>)
}

export default Footer; 