import React from 'react';

const Media = ({ video, cancion, artista, vidLinks }) => {

    console.log('in media', video, vidLinks)
    const { videoId, videoTitle } = video;
    console.log('in media', videoId, videoTitle)

    const videoList = videoId.map(list =>
        list ?
            <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe src={`https://www.youtube.com/embed/${list}`} className='embeded-responsive-item' allowFullScreen title="Video player" />
            </div>
            :
            null
    )
    return (
        <div className="card border-light">
            <div className="card-body">
                <h2 className="">Media</h2>
    <h3 className="mb-5">We have found the following videos for 
        <p><span className="capitalize">{artista}</span> - <span className="capitalize
    ">{cancion}</span>
        </p></h3>
                {videoList}
            </div>

        </div>
    );
};
export default Media;