import axios from 'axios';

const api = axios.create({baseURL: 'https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json'});

export default api;