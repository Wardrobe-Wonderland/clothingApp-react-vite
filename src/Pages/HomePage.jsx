import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";

const API_URL = "https://wardrobewonderland.adaptable.app/";

function Homepage(props) {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get(`${API_URL}/all`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log("Error Fetching the Products", error);
      });
  };

  useEffect(function () {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <h1>Wardrobe Wonderland</h1>
        </div>
        
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src/assets/images/2.jpeg"
                className="d-block w-100"
                alt="clothes"
              />
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/images/hanger.jpeg"
                className="d-block w-100"
                alt="hanger image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/images/pexels-photo-3755706.jpeg"
                className="d-block w-100"
                alt="hanger image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/images/pexels-photo-54200.jpeg"
                className="d-block w-100"
                alt="jeans"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <ProductList products={products} getProducts={getProducts} />

        <Link to={"/all"}></Link>
      </div>
    </>
  );
}
export default Homepage;
