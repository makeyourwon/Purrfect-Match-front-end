import React, {useState, useEffect} from 'react'
import AnimalCard from '../AnimalCard/AnimalCard'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/purrmatch/animals/` // Subject to change (maybe)

const AnimalList = () => {
  const [ animals, setAnimals] = useState([])  // State to store all animals
  const [filteredAnimals, setFilteredAnimals] = useState([]) // State for storing filtered animals
  const [currentPage, setCurrentPage ] = useState(1) // for current page #
  const [animalsPerPage] = useState(8) // # of animals displayed on screen at one time
  const [filters, setFilters] = useState({}) // state for filters 
  

  useEffect(() => {
    // used to fetch animals from the backend, backend route needs to be placed 
    axios.get(`${BASE_URL}`) // subject to change to fetch (maybe)
    .then(response => {
      setAnimals(response.data) // set animals state with data from response 
      setFilteredAnimals(response.data) //  Set filteredAnimals state with data from the response initially
    })
    .catch(error => {
      console.error('error fetching animals', error)
    }) 
  }, [])

  useEffect(() => {
    //effect to apply filters 
    applyFilters()
  }, [filters, animals])

  const applyFilters = () => {
    let filteredResults = animals // Initialize filteredResults with all animals initially
    if(filters.age) {
      filteredResults = filteredResults.filter(animal => animal.age === filters.age) // filters animals by age
    }
    if(filters.type) {
      filteredResults = filteredResults.filter(animal => animal.type === filters.type) // filters animals by type
    }
    setFilteredAnimals(filteredResults)
  }
  
  const handleFilterChange = (filterType, value) => {
    setFilters({...filters, [filterType]: value}) // Update filters state with the new filter value
  }

  const indexOfLastAnimal = currentPage  * animalsPerPage // Calculate index of last animal on current page
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage // Calculate index of first animal on current page
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal) // Slice the filteredAnimals array to get animals for the current page 

  const paginate = (pageNumber) => setCurrentPage(pageNumber) // this is used ti change the filter page number 
//Work in progress ///////////////////////////////////////////////////
  return (
    <FilterBar onFilterChange={handleFilterChange}/>

  )
}

export default AnimalList