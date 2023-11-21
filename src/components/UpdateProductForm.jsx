import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function UpdateProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("male");

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const updatedProduct = {
        name,
        description,
        size,
        price,
        gender,
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
      
        <form onSubmit={handleSubmit} className="update-form">

          <label>Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            value={price}
            onChange={handlePrice}
          />

          <button className="btn btn-primary btn-round">Update Product</button>
        </form>
      </div>
    </>
  );
}

export default UpdateProductForm;
