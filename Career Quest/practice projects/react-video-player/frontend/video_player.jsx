import React from 'react'

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const embedId = "Dx5DOi_8-uc"
        return (
            <div className="video-container">
                <iframe
                    width="720"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId}?controls=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <div className="controls-container"></div>
            </div>
        )
    }
}

export default VideoPlayer;
