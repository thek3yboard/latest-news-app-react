import React, { Component } from 'react'
import '../App.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href='#' onClick={this.accessHome}>
                        <h4 id="navTitle">Latest News Here</h4>
                    </a>
                </nav>
            </div>
        )
    }
}