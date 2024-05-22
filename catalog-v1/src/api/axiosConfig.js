import axios from 'axios';
// For endpoints? http requests
//This was what the video orginnaly wne to'https://9c96-103-106-239-104.ap.ngrok.io/'
export default axios.create({    
    baseURL: 'http://localhost:8080',
    // headers: {
    //     "ngrok-skip-browser-warning": "true"}
})
