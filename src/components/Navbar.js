import React, { Component } from 'react'
import '../App.css'

export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="#">
                    <h4 id="navTitle">Latest News Here</h4>
                </a>
            </nav>
        )
    }
}