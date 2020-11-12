import React from 'react';

const Media = ({ video, cancion, artista }) => {

    const { videoId, videoTitle, items } = video;

    const videoList = videoId.map(list =>
        list ?
            <div key={list} className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe src={`https://www.youtube.com/embed/${list}`} className='embeded-responsive-item' allowFullScreen title="Video player" />
            </div>
            :
            null
    )
    return (
        <div className="card border-light">
            <div className="card-body">
                <h2 className="">Media</h2>
    <h5 className="mb-5">We have found the following videos for 
        <p><span className="capitalize">{artista}</span> - <span className="capitalize
    ">{cancion}</span>
        </p></h5>
                {items !== [''] ? videoList : null}
            </div>

        </div>
    );
};
export default Media;