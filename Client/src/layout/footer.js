import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (<div> 
            <section id="footer">
            <ul class="icons">
                <li><a href="#" class="icon brands fa-twitter"><span class="label">cooperkyle.com</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">github</span></a></li>
                <li><a href="https://www.hackerrank.com/kyle23" class="icon brands fa-instagram"><span class="label">linkedin</span></a></li>
                <li><a href="https://www.linkedin.com/in/kylejacksoncooper/" class="icon brands fa-instagram"><span class="label">linkedin</span></a></li>
                <li><a href="mailto:kyle@cooperkyle.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
        </section>          
    </div>)
}

export default Footer; 