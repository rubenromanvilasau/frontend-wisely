import axios from 'axios';

export const getUsers = () => {
    return axios.get('http://localhost:4000/api/users');
}