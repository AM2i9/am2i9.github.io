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
                        <Project name="AM2i9.ml" description="My website, which you are on right now. I made it while learning a little bit or react.js (but I must say I have used a LOT more css than javascript), and will use it in the future as I create and learn more with the library." github_link="https://github.com/AM2i9/am2i9.github.io"/>
                        <Project name="Serial Output GUI" description="A simple application I created while messing around with Arduinos and sending them signals through serial ports. This application can be configured to create buttons to send a string to the Arduino over serial, so you can create a simple and at least a little nice looking gui." image="https://camo.githubusercontent.com/14482514d62ead4a2d0cf729d79219a9bf3fd292c4aaf2b61d2a1f2f8ac3e441/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3637353533323234383439333332363335392f3637353533333738313536313737303033332f756e6b6e6f776e2e706e67" github_link="https://github.com/AM2i9/serial-output-gui"/>
                    </React.StrictMode>
                </center>
            </div>
        )}
}

export default Projects