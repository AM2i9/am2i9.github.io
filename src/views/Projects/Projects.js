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
                        <Project name="Project 1" />
                        <Project name="Project 2" />
                    </React.StrictMode>
                </center>
            </div>
        )}
}

export default Projects