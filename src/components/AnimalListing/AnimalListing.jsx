import React, { useState, useEffect, applyFilters } from 'react'
import { useSearchParams } from 'react-router-dom';
import AnimalCard from '../AnimalCard/AnimalCard'
import animalService from '../../services/animalService'
import styles from './AnimalListing.css'
// const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/animals/` // Subject to change (maybe)

const AnimalList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [animals, setAnimals] = useState([])  // State to store all animals
  const [filteredAnimals, setFilteredAnimals] = useState([]) // State for storing filtered animals
  const [currentPage, setCurrentPage] = useState(1) // for current page #
  const [animalsPerPage] = useState(8) // # of animals displayed on screen at one time
  const [filters, setFilters] = useState({}) // state for filters 


  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const filters = Object.fromEntries([...searchParams]);
        const data = await animalService.getAnimals(filters);
        console.log(data)
        setAnimals(data);
        setFilteredAnimals(data)
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };
    fetchAnimals();
  }, [searchParams]);

  // useEffect(() => {
  //   //effect to apply filters 
  //   applyFilters()
  // }, [filters, animals])

  // const applyFilters = () => {
  //   let filteredResults = animals // Initialize filteredResults with all animals initially
  //   if(filters.age) {
  //     filteredResults = filteredResults.filter(animal => animal.age === filters.age) // filters animals by age
  //   }
  //   if(filters.type) {
  //     filteredResults = filteredResults.filter(animal => animal.type === filters.type) // filters animals by type
  //   }
  //   setFilteredAnimals(filteredResults)
  // }

  const handleFilterChange = (filterType, value) => {
    const newFilters = new URLSearchParams(searchParams);
    value ? newFilters.set(filterType, value) : newFilters.delete(filterType);
    setSearchParams(newFilters);
  };

  const totalPages = Math.ceil(animals.length / animalsPerPage);

  const indexOfLastAnimal = currentPage * animalsPerPage // Calculate index of last animal on current page
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage // Calculate index of first animal on current page
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal) // Slice the filteredAnimals array to get animals for the current page 

  const paginate = (pageNumber) => setCurrentPage(pageNumber) // this is used ti change the filter page number 
  //Work in progress ///////////////////////////////////////////////////
  return (
    // <FilterBar onFilterChange={handleFilterChange}/>
    // <div> hi
    //   <AnimalCard />
    // </div>

    <>
      <div>
        <select onChange={(e) => handleFilterChange('type', e.target.value)} value={searchParams.get('type') || ''}>
          <option value="">All Types</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>

        {/* <select onChange={(e) => handleFilterChange('age', e.target.value)} value={searchParams.get('age') || ''}>
          <option value="">All Ages</option>
          <option value="Baby">Baby</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select> */}

        <select onChange={(e) => handleFilterChange('gender', e.target.value)} value={searchParams.get('gender') || ''}>
          <option value="">Any Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Consider adding more filters based on your model fields */}
      </div>

      <div className={styles.cardContainer}>
        {currentAnimals.map((animal) => (
          <div key={animal.id} className={styles.cardItem}>
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            className={`${currentPage === number ? styles.active : ''}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>


  )
}

export default AnimalList