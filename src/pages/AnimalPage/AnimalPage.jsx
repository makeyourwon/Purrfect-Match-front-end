import React from "react";
import AnimalList from "../../components/AnimalListing/AnimalListing";

const AnimalPage = () => {
  return (
    <div className="page-container">
      <h1 className="main-text"> Availible Pets</h1>
      <div className="content-container">
        <AnimalList />
      </div>
    </div>
  )
}

export default AnimalPage