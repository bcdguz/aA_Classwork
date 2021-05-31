import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './frontend/video_player'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<VideoPlayer />, document.getElementById("main"))
});