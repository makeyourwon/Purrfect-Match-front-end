import React, { useState, useEffect } from 'react'
import favoriteService from '../../services/favoriteService';
import AnimalCard from '../AnimalCard/AnimalCard';
import './FavoriteList.css'

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await favoriteService.getFavorites();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching Favorties:', error);
      }
    };
    fetchFavorites();
  }, []);



  return (
   
    <>
      <div className="card-container">
        {favorites && favorites.length > 0 ?(
          favorites.map((favorite) => (
            <div key={favorite.id} className="cardItem">
              <AnimalCard animal={favorite} />
            </div>
          ))
        ) : (
          <p>No favorites yet.</p> // Display this message when there are no favorites
        )}
      </div>
    </>

  )
}

export default FavoritesList