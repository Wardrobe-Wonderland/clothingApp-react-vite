import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const API_URL = "https://wardrobe-wonderland-backend.onrender.com/";

function FemalePage(props) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get(`${API_URL}/all`)
      .then(function (response) {
        const femaleClothes = response.data.filter((currentCloth)=>{
          return currentCloth.gender.toLowerCase() === "female"
        })
        setProducts(femaleClothes);
      })

      .catch(function (error) {
        console.log("Error Fetching the Products", error);
      });
  }, []);

  return (
    <div>
      <ProductList products={products} />
      <Link to={"/female"}></Link>
    </div>
  );
}
export default FemalePage;
