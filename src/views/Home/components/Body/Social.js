import React from 'react';
import './Social.css'

function Social() {
    return (

        <div className="Social">
            <ul>
                <li>
                    <a href="https://github.com/AM2i9" target="_blank" rel="noopener noreferrer"><img id="github-link" src="GitHub-Mark-Light-64px.png" alt="Github"></img></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCfLCmE1BPuZm_xX3hxRMNdQ" target="_blank" rel="noopener noreferrer"><img id="youtube-link" src="yt_icon_mono_dark.png" alt="Youtube"></img></a>
                </li>
            </ul>
        </div>

    );
}

export default Social