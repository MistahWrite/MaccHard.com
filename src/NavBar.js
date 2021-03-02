import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <Router>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/artists"><li>Artists</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/contactus"><li>Contact Us</li></Link>
                    </Router>
                </ul>
            </div>
        );
    }
}

export default NavBar;