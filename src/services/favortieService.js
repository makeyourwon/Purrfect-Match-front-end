import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/favorites/`


async function getFavorites() {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${BASE_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const favorites = res.data[0].animals;
        console.log(favorites);
        return favorites;
    } catch (error) {
        console.error('Error fetching favorites:', error);
    }
}

async function addFavorites(pk) {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.post(`${BASE_URL}add/${pk}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        
    } catch (error) {
        console.error('Error adding favorite:', error);
    }
}


async function removeFavorites(pk) {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.post(`${BASE_URL}remove/${pk}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        
    } catch (error) {
        console.error('Error remove favorite:', error);
    }
}


export default { getFavorites, addFavorites, removeFavorites }