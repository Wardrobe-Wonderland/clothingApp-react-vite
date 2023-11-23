import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";
import slide1 from "../assets/images/slide1.jpeg"
import slide2 from "../assets/images/slide2.jpeg"
import slide3 from "../assets/images/slide3.jpeg"
import slide4 from "../assets/images/slide4.jpeg"

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
                src={slide1}
                className="d-block w-100"
                alt="clothes"
              />
            </div>
            <div className="carousel-item">
              <img
                src={slide2}
                className="d-block w-100"
                alt="hanger image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={slide3}
                className="d-block w-100"
                alt="hanger image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={slide4}
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
        <p></p>
        <ProductList products={products} getProducts={getProducts} />

        <Link to={"/all"}></Link>
      </div>
    </>
  );
}
export default Homepage;
