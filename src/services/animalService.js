import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/animals/`

async function getAnimals() {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${BASE_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const animals = res.data;
        console.log(animals);
        return animals;
    } catch (error) {
        console.error('Error fetching animals:', error);
    }
}

export default { getAnimals }