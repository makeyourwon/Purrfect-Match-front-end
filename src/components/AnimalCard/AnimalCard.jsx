import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AnimalCard = ({ animal }) => {
  const navigate = useNavigate();
  console.log(animal)
  const displayImage = animal.photo_url.photo.length > 0 ? animal.photo_url.photo[0].medium: null;
  // const displayImage = animal.photo_url;

  const handleClick = () => {
    navigate(`/animals/${animal.id}`);
  };

  return (
      // Regular display
    // <div className="animal-card">
    //   {displayImage && <img src={displayImage} alt={`Photo of ${animal.name}`} />}
    //   <h2>{animal.name}</h2>
    //   <p>Age: {animal.age}</p>
    //   <p>Location: {animal.location}</p>
    // </div>

    //Link Alt

    // <Link to={`/animals/${animal.id}`} className="animal-card">
    //   {displayImage && <img src={displayImage} alt={`Photo of ${animal.name}`} />}
    //   <h2>{animal.name}</h2>
    //   <p>Age: {animal.age}</p>
    //   <p>Location: {animal.location}</p>
    //   {/* Add more details as per your requirement */}
    // </Link>

    //Navigate
    <div className="animal-card" onClick={handleClick}>
      {displayImage && <img src={displayImage} alt={`Photo of ${animal.name}`} />}
      <h2>{animal.name}</h2>
      <p>Age: {animal.age}</p>
      <p>Location: {animal.location}</p>
      {/* Add more details as per your requirement */}
    </div>

  )
}

export default AnimalCard