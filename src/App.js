import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/App.css';
import sundial from './photos/isss-sundial-720x220.jpg';

class App extends Component {
  render() {
    return (
        <div className="container">
            <nav>
                <div className="nav-wrapper red darken-2">
                    <a href="#!" className="brand-logo">MAD</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
            </nav>
            <div className="parallax-container">
                <div className="parallax"><img src={ sundial } /></div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src="photos/isss-sundial-720x220.jpg" /></div>
            </div>
            <div className="row">
                <div className="col s1">1</div>
                <div className="col s1">2</div>
                <div className="col s1">3</div>
                <div className="col s1">4</div>
                <div className="col s1">5</div>
                <div className="col s1">6</div>
                <div className="col s1">7</div>
                <div className="col s1">8</div>
                <div className="col s1">9</div>
                <div className="col s1">10</div>
                <div className="col s1">11</div>
                <div className="col s1">12</div>
            </div>
            <a className="waves-effect waves-light btn">button</a>
        </div>
    );
  }
}

export default App;
