import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";


const API_URL = "https://wardrobewonderland.adaptable.app/";

function Homepage(props) {
  const [products, setProducts] = useState([]);
  const  getProducts = () => {
    axios
    .get(`${API_URL}/all`)
    .then(function (response) {
      setProducts(response.data);
    })
    .catch(function (error) {
      console.log("Error Fetching the Products", error);
    });} 

  useEffect(function () {
    getProducts()

  }, []);

  return (
    <>
      <div>

        <ProductList products={products}  getProducts={getProducts}/>
    
        <Link to={"/all"}>
        </Link>
      </div>
    </>
  );
}
export default Homepage;
