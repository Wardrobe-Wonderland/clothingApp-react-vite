import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";


const API_URL = "http://localhost:5005";

function Homepage(props) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get(`${API_URL}/all`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log("Error Fetching the Products", error);
      });


  }, []);

  return (
    <>
      <div>

        <ProductList products={products} />
    
        <Link to={"/all"}>
        </Link>
      </div>
    </>
  );
}
export default Homepage;
