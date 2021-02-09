import React from 'react';
import './Project.css'
class Project extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            display: false,
            arrow: '˅'
        }

        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.openGithub = this.openGithub.bind(this)
        this.openRepl = this.openRepl.bind(this)
        this.openDeployment = this.openDeployment.bind(this)
    } 

    show(){
        this.setState({
            display: true,
            arrow: '˄'
        })
    }

    hide(){
        this.setState({
            display: false,
            arrow: '˅'
        })
    }

    handleClick(){
        
        if(this.state.display){
            this.hide()
        } else {
            this.show()
        }
    }

    openGithub(){

        window.open(this.props.github_link)
    }

    openRepl(){

        window.open(this.props.repl_link)
    }

    openDeployment(){

        window.open(this.props.deployment_link)
    }

    render() {
        return (
            <div className="Project">
                <button className="Button" onClick={this.handleClick}><text>{this.props.name}</text>   <div className="arrow">{this.state.arrow}</div></button>
                <div className="info" style={{display: this.state.display ? 'inline-block' : 'none'}}>

                {this.props.video &&
                    <iframe title="Project Video" width="560" height="315" src={this.props.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                }
                {this.props.image &&
                    <img id="project" src={this.props.image} alt="Project Image"></img>
                }

                    <div id="p">{this.props.description}</div>

                {this.props.github_link &&
                    <button id="github-page" className="sourceButton" onClick={this.openGithub}>
                        <img id="github-link" src="GitHub-Mark-Light-64px.png" alt="Github"></img> View on Github
                    </button>
                }

                {this.props.repl_link &&
                    <button id='replit-page' className="sourceButton" onClick={this.openRepl}>
                        <img id="repl-link" src="512px-Repl.it_logo.png" alt="Repl.it"></img> View on Repl.it
                    </button>
                }

                {this.props.deployment_link &&
                    <button id='view-deployment' className="sourceButton" onClick={this.openDeployment}>
                        <img id="deployment" src="upload.png" alt="Deployment"></img> View Deployment
                    </button>

                }

                </div>
            </div>
            
        )}
}

export default Project