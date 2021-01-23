import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import About from './views/About/About'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Nav />
                <div className="app">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/projects' component={Projects}/>
                        <Route exacpt path='/about' component={About}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default App