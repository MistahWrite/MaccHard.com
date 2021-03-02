import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'

class Content extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Route path="/" exact render={ () => {
                            return(<main>This is my content.</main>);
                        }
                    }/>
                    <Route path="/artists" exact render={ () => {
                            return(<main>These are my artists.</main>);
                        }
                    }/>
                    <Route path="/shop" exact render={ () => {
                            return(<main>This is my shop.</main>);
                        }
                    }/>
                    <Route path="/contactus" exact render={ () => {
                            return(<main>This is my Contact Us section.</main>);
                        }
                    }/>

                </Router>
            </div>
        );
    }
}

export default Content;