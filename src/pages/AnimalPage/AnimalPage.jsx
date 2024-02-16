import React from "react";
import AnimalList from "../../components/AnimalListing/AnimalListing";
// import './AnimalPage.css'

const AnimalPage = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <AnimalList />
      </div>
    </div>
  )
}

export default AnimalPage