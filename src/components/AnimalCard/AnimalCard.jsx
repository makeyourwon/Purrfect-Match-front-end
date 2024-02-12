import React from 'react'

const AnimalCard = ({ animal}) => {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name}/>
      <h2>{animal.name}</h2>
      <p>Type: {animal.type}</p>
      <p>Age: {animal.age}</p>
      {/* More to be included will make a group check on monday */}
    </div>
  )
}

export default AnimalCard