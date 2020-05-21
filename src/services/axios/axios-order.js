import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-myburger-app-12717.firebaseio.com/"
})

export default instance;