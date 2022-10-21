import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ allPlants, onNewPlantSubmit }) {
  const [filteredPlants, setFilteredPlants] = useState([]);

  const applySearch = (query) => {
    const searched = allPlants.filter((plant) => {
      return plant.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredPlants(searched);
    console.log("searched: ", searched);
  };
  console.log("filteredPlants: ", filteredPlants);

  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit} />
      <Search applySearch={applySearch} />
      <PlantList allPlants={allPlants} filteredPlants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
