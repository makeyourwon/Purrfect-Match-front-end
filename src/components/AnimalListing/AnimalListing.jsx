import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnimalCard from '../AnimalCard/AnimalCard';
import animalService from '../../services/animalService';

const AnimalList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [animals, setAnimals] = useState([]); // State to store all animals
  const [filteredAnimals, setFilteredAnimals] = useState([]); // State for storing filtered animals
  const [currentPage, setCurrentPage] = useState(1); // for current page #
  const [animalsPerPage] = useState(8); // # of animals displayed on screen at one time

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const filters = Object.fromEntries([...searchParams]);
        const data = await animalService.getAnimals(filters);
        setAnimals(data);
        setFilteredAnimals(data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };
    fetchAnimals();
  }, [searchParams]);

  const handleFilterChange = (filterType, value) => {
    const newFilters = new URLSearchParams(searchParams);
    value ? newFilters.set(filterType, value) : newFilters.delete(filterType);
    setSearchParams(newFilters);
  };

  const totalPages = Math.ceil(animals.length / animalsPerPage);
  const indexOfLastAnimal = currentPage * animalsPerPage; // Calculate index of last animal on current page
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage; // Calculate index of first animal on current page
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal); // Slice the filteredAnimals array to get animals for the current page

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // this is used to change the filter page number

  return (
    <>
      <div>
        <select onChange={(e) => handleFilterChange('type', e.target.value)} value={searchParams.get('type') || ''}>
          <option value="">All Types</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>

        <select onChange={(e) => handleFilterChange('age', e.target.value)} value={searchParams.get('age') || ''}>
          <option value="">All Ages</option>
          <option value="Baby">Baby</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>

        <select onChange={(e) => handleFilterChange('gender', e.target.value)} value={searchParams.get('gender') || ''}>
          <option value="">Any Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        {currentAnimals.map((animal) => (
          <div key={animal.id}>
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default AnimalList;
