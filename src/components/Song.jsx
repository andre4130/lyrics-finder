import React, { Fragment } from 'react';

const Song = ({ letra, cancion }) => {

    return (
        <Fragment>
            <div className="card border-light mb-3">
                <div className="card-body">
                    <h2>Song Lyrics for {<span className='capitalize'>{cancion}</span>}</h2>
                    {
                        letra === '' ? <p className="letra">We are very sorry but we couldn't find the lyrics you searched for. Maybe give it another go?</p> : <p className="letra">{letra}</p>
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Song;