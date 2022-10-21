import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants, filteredPlants }) {
  const displayedPlants = (
    filteredPlants.length > 0 ? filteredPlants : allPlants
  ).map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />;
  });

  return <ul className="cards">{displayedPlants}</ul>;
}

export default PlantList;
