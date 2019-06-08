import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-7b450.firebaseio.com/'
});

export default instance;
