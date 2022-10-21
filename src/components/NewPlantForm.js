import React, { useState } from "react";

const API = "http://localhost:6001/plants";
const newPlantImg = "./images/pilea.jpg";

function NewPlantForm({ onNewPlantSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(API, configObj)
      .then((r) => r.json())
      .then((data) => onNewPlantSubmit(data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
