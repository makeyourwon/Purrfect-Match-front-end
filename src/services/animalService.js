import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/animals/`

async function getAnimals(filters = {}) {
    const token = localStorage.getItem('token');
    const queryString = new URLSearchParams(filters).toString();
    const url = `${BASE_URL}?${queryString}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching animals:', error);
        throw error;
    }
}

async function getAnimalById(id) {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${BASE_URL}${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching animal details:', error);
        throw error;
    }
}

export default { getAnimals, getAnimalById }