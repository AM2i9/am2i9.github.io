import React from 'react';
import './Nav.css'

class Nav extends React.Component {

    setWindowLocation (path) {
        window.location.href=path;
    }
    render() {
        return (
        <div className="Nav">
            <button id="home" onClick={() => this.setWindowLocation('/')}>Home</button>
            {/*<button id="projects" onClick={() => this.setWindowLocation('/projects')}>Projects</button>*/}
            <button id="about" onClick={() => this.setWindowLocation('/about')}>About</button>
        </div>
        )
    }
}


export default Nav