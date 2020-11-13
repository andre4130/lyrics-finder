    import React, { useState } from 'react';
    import styled from 'styled-components';


    const Formulario = ({ setBusquedaLetra, bio }) => {

        const [busqueda, setBusqueda] = useState({
            artista: '',
            cancion: ''
        });

        //funcion para leer contenido

        const setState = e => {
            setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value
            })
        };

        const [error, setError] = useState(false);

        const { artista, cancion } = busqueda;


        // Search function 
        const searchInformation = e => {
            e.preventDefault();

            if (artista.trim() === "" || cancion.trim() === "") {
                setError(true);
                return;
            }
            // if the function does not trigger an error (artist and song are fullfiled), then setError is false and the function carries on!
            setError(false);
            setBusquedaLetra(busqueda)
        }

        //changing the banner after searching for a group using styled components

        return (
            // <div className="bg-info">
            <Banner bio={bio.strArtistLogo}>
                {error ? <p className="alert alert-danger text-center p-2">All fields are Mandatory</p> : null}
                <div className="container">
                    <div className="row">
                        <form
                            onSubmit={searchInformation}
                            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        >
                            <fieldset>
                                <legend className="text-center">
                                    Music Lyrics Finder
                                </legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bg-primary text-white p-2 rounded">Artist</label>
                                            <input type="text"
                                                className="form-control"
                                                name="artista"
                                                placeholder="Artist Name"
                                                onChange={setState}
                                                value={artista}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bg-primary text-white p-2 rounded" htmlFor="">Song</label>
                                            <input type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Song Name"
                                                onChange={setState}
                                                value={cancion}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary float-right"
                                >Search</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </Banner>
        );
    };

    const Banner = styled.div`
    background-image: url(${props => props.bio})
    `;

    export default Formulario;