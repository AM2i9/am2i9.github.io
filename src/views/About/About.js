import React from 'react';
import '../../index.css';
import AboutText from './components/About-Text'
import Portrait from './components/Portrait'

class About extends React.Component {
    render() {
        return (
            <center>
                <React.StrictMode>
                    <Portrait />
                    <AboutText />
                </React.StrictMode>
            </center>
        )}
}

export default About