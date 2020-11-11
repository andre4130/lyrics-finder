import React from 'react';
import Song from './Song';
import Artist from './Artist';
import Media from './Media'

const Info  = ({letra, artista, bio, cancion, video, vidLinks}) => {
    console.log('in app',video);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Artist
                        bio={bio}
                        artista={artista}
                    />
                </div>
                <div className="col-md-6">
                <Song
                    letra={letra}
                    cancion={cancion}
                />
                <Media
                    video={video}
                    artista={artista}
                    cancion={cancion}
                    vidLinks={vidLinks}
                />
                </div>
            </div>
        
        </div>
    );
};

export default Info;