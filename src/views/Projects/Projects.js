import React from 'react';
import '../../index.css';
import './Projects.css'
import Project from './components/Project'

class Projects extends React.Component {
    render() {
        return (
            <div className = "Projects">
                <center>
                    <React.StrictMode>
                        <Project name="Project 1" description="This is a project in order to test the projects page" github_link="https://github.com/AM2i9/am2i9.github.io" repl_link="https://repl.it/~"/>
                        <Project name="Project 2" />
                    </React.StrictMode>
                </center>
            </div>
        )}
}

export default Projects