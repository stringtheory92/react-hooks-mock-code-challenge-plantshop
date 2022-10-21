import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants";

function App() {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setAllPlants(data));
  }, []);

  const onNewPlantSubmit = (newPlant) => {
    console.log("submitted:", newPlant);
    setAllPlants([...allPlants, newPlant]);
  };
  console.log("allPlants: ", allPlants);

  return (
    <div className="app">
      <Header />
      <PlantPage allPlants={allPlants} onNewPlantSubmit={onNewPlantSubmit} />
    </div>
  );
}

export default App;
