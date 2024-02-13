import React from 'react'

const AnimalCard = ({ animal}) => {

 const displayImage = animal.photos.length > 0 ? animal.photos[0].medium : null;

  return (
    // <div className="animal-card">
    //   <img src={animal.image} alt={animal.name}/>
    //   <h2>{animal.name}</h2>
    //   <p>Type: {animal.type}</p>
    //   <p>Age: {animal.age}</p>
    //   {/* More to be included will make a group check on monday */}
    // </div>
    <div className="animal-card">
      {displayImage && <img src={displayImage} alt={`Photo of ${animal.name}`} />}
      <h2>{animal.name}</h2>
      <p>Age: {animal.age}</p>
      <p>Location: {animal.location}</p>
    </div>


  )
}

export default AnimalCard