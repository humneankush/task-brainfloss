import axios from 'axios';

export const fetchUserData = async () => {
    const response = await axios.get('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    return response.data;
};
