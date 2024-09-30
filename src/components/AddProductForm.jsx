import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://wardrobe-wonderland-backend.onrender.com/";

function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState(null);
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleImageLink = (e) => setImageLink(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createProduct = {
        name,
        description,
        size,
        price,
        gender,
        imageLink,
      };

      await axios.post(`${API_URL}/all`, createProduct);

      setName("");
      setDescription("");
      setSize("");
      setPrice("");
      setGender("");
      setImageLink(null);

      navigate("/");
    } catch (err) {
      return <p>No products found</p>;
    }
  };

  return (
    <>
    <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}>
  
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="imageLink"
            placeholder="Image"
            value={imageLink}
            onChange={handleImageLink}
          />
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

          <label>
            Gender: Male
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
          <button className="btn btn-primary btn-round" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProductForm;
