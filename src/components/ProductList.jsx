import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "https://wardrobe-wonderland-backend.onrender.com/";

function ProductList(props) {
  const [products, setProducts] = useState("");
  const handleDelete = (productId) => {
    axios
      .delete(`${API_URL}/all/${productId}`)
      .then((response) => {
        props.getProducts();
        console.log("product deleted");
      })
      .catch((error) => {
        console.log("error displaying");
      });

    console.log(`Delete the product with id ${productId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {props.products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <Link to={`/all/${product.id}`}><img
                src={product.imageLink}
                className="card-img-top"
              /></Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Size: {product.size}</p>
                <p className="card-text">Price: {product.price}</p>
                <button
                  className="btn btn-danger" onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <Link to={`/update/${product.id}`}>
                  <button className="btn btn-primary ml-2">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
