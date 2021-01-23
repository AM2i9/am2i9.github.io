import React from 'react';
import '../index.css';
import Title from './components/Header/Title'
import Logo from './components/Body/Logo'
import Social from './components/Body/Social'

class Home extends React.Component {
    render() {
        return (
            <center>
                <React.StrictMode>
                    <Title />
                    <Logo />
                    <Social />
                </React.StrictMode>
            </center>
        )}
}

export default Home