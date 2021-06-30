import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-a-m-a-z-o-n/us-central1/api',

  // 'https://us-central1-clone-a-m-a-z-o-n.cloudfunctions.net/api'
});

export default instance;
