import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";

const API_URL = "http://localhost:5005";

function Homepage(props) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get(`${API_URL}/male`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log("Error Fetching the Products", error);
      });

    axios
      .get(`${API_URL}/female`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log("Error Fetching the Products", error);
      });
  }, []);
  console.log(products);
  return (
    <>
      <div>
        <p>This is Homepage</p>
        <ProductList products={products} />
        <Link to={"/Men"}>
          <li>All Men</li>
        </Link>
      </div>
    </>
  );
}
export default Homepage;
