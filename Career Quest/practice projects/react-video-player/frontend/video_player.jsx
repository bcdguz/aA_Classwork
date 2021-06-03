import React from 'react';


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
                <div className="controls-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;
