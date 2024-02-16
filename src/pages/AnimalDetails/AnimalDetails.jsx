import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import animalService from '../../services/animalService';
import './AnimalDetails.css';

const AnimalDetails = () => {
  let { animalId } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      try {
        const data = await animalService.getAnimalById(animalId);
        setAnimal(data);
      } catch (error) {
        console.error('Error fetching animal details:', error);
      }
    };

    fetchAnimalDetails();
  }, [animalId]);

  if (!animal) {
    return <div>Loading...</div>; 
  }

  const displayImage = animal.photo_url.photo[0].medium 

  return (
    <div className='animal-container'>

    <div className='animal-photo'>
      {displayImage && (
        <img src={displayImage} alt={`Photo of ${animal.name}`} />
      )}
      </div>
      <div className='animal-details'>
      <h2>{animal.name}</h2>
      <p>Type: {animal.type}</p>
      <p>Breed: {animal.breed.primary}</p>
      <p>Age: {animal.age}</p>
      <p>Gender: {animal.gender}</p>
      <p>Status: {animal.status}</p>
      <p>Description: {animal.description || 'No description available.'}</p>
      <div>
        <h3>Contact Information:</h3>
        <p>Email: {animal.contact.email}</p>
        <p>Phone: {animal.contact.phone}</p>
        <p>Address: {animal.contact.address.address1}, {animal.contact.address.city}, {animal.contact.address.state} {animal.contact.address.postcode}</p>
      </div>
    </div>
    </div>
  );
};

export default AnimalDetails;
