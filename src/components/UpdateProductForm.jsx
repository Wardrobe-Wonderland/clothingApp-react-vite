import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://wardrobe-wonderland-backend.onrender.com";

function UpdateProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("male");
  const [imageLink, setImageLink] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/all/${id}`);
        const product = response.data;


        setName(product.name);
        setDescription(product.description);
        setSize(product.size);
        setPrice(product.price);

        
        setGender(product.gender);



        
        setImageLink(product.imageLink || "URL_TO_DEFAULT_IMAGE");
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSize = (e) => setSize(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleImageLink = (e) => setImageLink(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const updatedProduct = {
        name,
        description,
        size,
        price,
        gender,
        imageLink
      };

      await axios.put(`${API_URL}/all/${id}`, updatedProduct);

      navigate("/");
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  return (
    <>
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}
      >

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
              checked={gender === "male"}
              onChange={handleGender}
            />
          </label>
          <label>
            Female
            <input
              name="gender"
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleGender}
            />
          </label>
          <button className="btn btn-primary btn-round" type="submit">
            Edit Product
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateProductForm;

