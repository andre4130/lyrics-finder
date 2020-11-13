import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Info from './components/Info';
import youtube from './api/youtube';
import axios from 'axios';

function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [artista, setArtista] = useState('');
  const [bio, setBio] = useState('');
  const [cancion, setCancion] = useState('');
  const [video, setVideo] = useState({
    videoId: [],
    videoTitle: [],
    items: []
  });
  const [vidLinks, setVidLinks] = useState([]);

  useEffect(() => {
    // the following code is very usefull for preventing useEffect to be triggered in case the object is empty
    if (Object.keys(busquedaLetra).length === 0) return;

    const searchApiLyrics = async () => {

      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const query = artista + '+' + cancion;

      //a promise enhances the performance of the app. both queries start at the same time.
      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(urlArtista)
      ]);

      const response = await youtube.get('/search', {
        params: {
          q: query
        }
      })
      setArtista(artista);
      setLetra(letra.data.lyrics);
      if (informacion.data.artists != null) {
        setBio(informacion.data.artists[0])
      } else {
        setBio('')
      }
      setCancion(cancion);
      console.log(response.data.items)

      if (response.data.items === []) {
        console.log("array is empty")
} else {
        setVideo({
          videoId: [response.data.items[0].id.videoId, response.data.items[1].id.videoId, response.data.items[2].id.videoId],
          videoTitle: [response.data.items[0].snippet.title, response.data.items[1].snippet.title, response.data.items[2].snippet.title],
          items: response.data.items
        })
      }

      // setVidLinks([response.data.items[0].id.videoId, response.data.items[1].id.videoId, response.data.items[2].id.videoId])
    }
    searchApiLyrics();

  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
        bio={bio}
      />
      {Object.keys(busquedaLetra).length !== 0 ?
        <Info
          cancion={cancion}
          letra={letra}
          artista={artista}
          bio={bio}
          video={video}
          vidLinks={vidLinks}
        />
        : null}
    </Fragment>
  );
}

export default App;
