import React from 'react'
import { Link } from 'react-router-dom';

const AnimalCard = ({ animal}) => {

 const displayImage = animal.photos.length > 0 ? animal.photos[0].medium : null;

  return (
   
    // <div className="animal-card">
    //   {displayImage && <img src={displayImage} alt={`Photo of ${animal.name}`} />}
    //   <h2>{animal.name}</h2>
    //   <p>Age: {animal.age}</p>
    //   <p>Location: {animal.location}</p>
    // </div>
    <Link to={`/animals/${animal.id}`} className="animal-card">
      {displayImage && <img src={displayImage} alt={`Photo of ${animal.name}`} />}
      <h2>{animal.name}</h2>
      <p>Age: {animal.age}</p>
      <p>Location: {animal.location}</p>
      {/* Add more details as per your requirement */}
    </Link>

  )
}

export default AnimalCard