import axios from 'axios';

const API_KEY = 'AIzaSyBnm7KezZFv4fkHmdwd1IZxATHA0GyvomI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: API_KEY
    }
})