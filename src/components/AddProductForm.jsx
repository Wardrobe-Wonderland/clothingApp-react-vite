import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();


const handleName = (e) => setName(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleSize = (e) => setSize(e.target.value);
const handlePrice = (e) => setPrice(e.target.value);
const handleGender = (e) => setGender(e.target.value);


const handleSubmit = async (e) => {
  try {
    e.preventDefault();

    const createProduct = {
      name,
      description,
      size,
      price,
      gender,
    };

    await axios.post(`${API_URL}/all`, createProduct);


    setName("");
    setDescription("");
    setSize("");
    setPrice("");
    setGender("");

    navigate("/");
  } catch (err) {
    return <p>No products found</p>;
  
  }
}
  
return (
  <>
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      <form onSubmit={handleSubmit}
       className="create-form">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label>Size</label>
        <input
          className="form-control"
          type="text"
          name="size"
          placeholder="Size"
          value={size}
          onChange={handleSize}
        />

        <label>Price</label>
        <input
          className="form-control"
          type="number"
          name="price"
          value={price}
          onChange={handlePrice}
        />

        <label>Gender:
          Male
          <input
            name="gender"
            type="radio"
            value="male"
            checked
            onChange={handleGender}
          />
        </label>
        <label>
          Female
          <input
            name="gender"
            type="radio"
            value="female"
            onChange={handleGender}
          />
        </label>
        <button className="btn btn-primary btn-round">Add Product</button>
      </form>
    </div>
  </>
)

}

export default AddProductForm;










