import React from 'react';
import './Project.css'
class Project extends React.Component {
    render() {
        return (
            <div className="Project">
                <h3>{this.props.name}</h3>
            </div>
            
        )}
}

export default Project