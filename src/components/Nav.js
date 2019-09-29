import React from 'react';
import '../css/MainDisplay.css';
import {Link} from 'react-router-dom';



function Nav(){
    return (
        <nav>
            <h1>Just Beers</h1>
            <ul className="nav-links">
                <Link to='/'><li>Home</li></Link>
                <Link to='/favorites'><li>Favorites</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;