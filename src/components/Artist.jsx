import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

const Artist = ({ bio, artista }) => {



    const { intFormedYear, strArtist, strArtistThumb, strBiographyEN, strCountry, strGenre } = bio



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
                        {!bio.strCountry ? null :
                        <p className="card-text"><b>From: </b>{strCountry}</p>}
                        {!bio.strGenre ? null :
                        <p className="card-text"><b>Genre: </b>{strGenre}</p>}
                        {!bio.intFormedYear ? null :
                        <p className="card-text"><b>Formed in: </b>{intFormedYear}</p>}
                        {!bio.strArtistFanart ? null : <Carousel>
                        
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={bio.strArtistFanart}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            {!bio.strArtistFanart2 ? null :
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={bio.strArtistFanart2}
                                    alt="Third slide"
                                />
                            </Carousel.Item>}
                            {!bio.strArtistFanart3 ? null :
                            <Carousel.Item interval={2500}>
                                <img
                                    className="d-block w-100"
                                    src={bio.strArtistFanart3}
                                    alt={`${bio.artista}`}
                                />
                            </Carousel.Item>}
                        </Carousel>}
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