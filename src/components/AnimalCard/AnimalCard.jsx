import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import favoriteService from '../../services/favoriteService';
import '../AnimalCard/AnimalCard.css'


const AnimalCard = ({ animal }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false)
  const displayImage = animal.photo_url.photo.length > 0 ? animal.photo_url.photo[0].medium : null;

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await favoriteService.getFavorites(); 
        const favoriteIds = favorites.map(fav => fav.id);
        setIsFavorite(favoriteIds.includes(animal.id));
      } catch (error) {
        console.error('Failed to fetch favorites', error);
      }
    };

    fetchFavorites();
  }, [animal.id]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await favoriteService.removeFavorites(animal.id);
    } else {
      await favoriteService.addFavorites(animal.id);
    }
    setIsFavorite(!isFavorite);
  };

  const handleClick = () => {
    navigate(`/animals/${animal.id}`);
  };

  return (
    <div className="animal-card" onClick={() => navigate(`/animals/${animal.id}`)}>
      {displayImage && <img src={displayImage} alt={animal.name} />}
      <div className="animal-info">
        <h1>{animal.name} </h1>
        <h2>{animal.age} | {animal.gender} </h2>
      </div>
      <button id="heartButton" onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
        className={isFavorite ? 'favorite' : 'not-favorite'}
      >
        {isFavorite ? '❤️' : '♡'}
      </button>
    </div>
  )
}

export default AnimalCard