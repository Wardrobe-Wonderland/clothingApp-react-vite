
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const API_URL = "https://wardrobewonderland.adaptable.app/";

function MalePage (props){
    const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get(`${API_URL}/all`)
      .then(function (response) {
        const maleClothes = response.data.filter((currentCloth) =>{
          return currentCloth.gender.toLowerCase() === "male"
        })
        setProducts(maleClothes);

      })

      .catch(function (error) {
        console.log("Error Fetching the Products", error);
      });


  }, []);
  

    return (
        <div>
             <ProductList products={products} />
        <Link to={"/male"}>
        </Link>
        </div>
    )
}
export default MalePage;