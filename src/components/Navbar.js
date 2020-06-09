import React, { Component } from 'react'
import '../App.css'

//Components
//import Home from './Home'

export default class Navbar extends Component {

    /*
    accessHome = () => {
        this.refs.home.apiCall('https://newsapi.org/v2/top-headlines?apiKey=e75e2e49fd7f4230911a5352c02c8c46&country=ar');
    }
    */

    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href='#' onClick={this.accessHome}>
                        <h4 id="navTitle">Latest News Here</h4>
                    </a>
                </nav>
                {/*<Home ref='home'/>*/}
            </div>
        )
    }
}