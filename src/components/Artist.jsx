import React, { Fragment } from 'react';

const Artist = ({ bio, artista }) => {

    // if (Object.keys(bio).length === 0) return null;

    const { intFormedYear, strArtist, strArtistThumb, strBiographyEN, strCountry, strGenre } = bio
    // const band = strArtist.toUpperCase();
    // const artistaCap = artista.toUpperCase();

    return (
        <Fragment>
            { bio === '' ? 
            <div className="card border-light">
                <div className="card-body">
                <h2 className="mb-3">
                    No results found for {artista.toUpperCase()}
                </h2>
                <p className="letra">Ooopss...it seems that the artist you're looking for, is not yet in our database...</p>
            </div>
                </div>
                 :
                <div className="card border-light">
                    <div className="card-body">
                        <h1 className="mb-2">
                            {strArtist.toUpperCase()}
                        </h1>
                        <img src={strArtistThumb} alt={bio.strArtistThumb} />
                        <p className="card-text"><b>From: </b>{strCountry}</p>
                        <p className="card-text"><b>Genre: </b>{strGenre}</p>
                        <p className="card-text"><b>Formed in: </b>{intFormedYear}</p>
                        <p className="card-text"></p>
                        <h2>Biography</h2>
                        <p className="letra">
                            {strBiographyEN}
                        </p>
                        <p className="card-text">
                            {bio.strFacebook === '' ? null : <a href={`https://${bio.strFacebook}`} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>}

                            {bio.strTwitter === '' ? null : <a href={`https://${bio.strTwitter}`} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>}
                            {bio.strLastFMChart === null ? null : <a href={`${bio.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-lastfm"></i>
                            </a>}
                        </p>
                    </div>
                </div>
            }
        </Fragment>

    );
};

export default Artist;