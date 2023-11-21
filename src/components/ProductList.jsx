import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const API_URL = "https://wardrobewonderland.adaptable.app/";

function ProductList(props) {
  const [products, setProducts] = useState("");
  const handleDelete = (productId) => {
    axios.delete(`${API_URL}/all/${productId}`)
    .then((response)=>{
      props.getProducts()
console.log("product deleted");
    }).catch((error)=>{
      console.log("error displaying");
    })
      
    
   console.log(`Delete the product with id ${productId}`);
  };
 
  return (
    <div>
      <h2>Product List</h2>
      {props.products.map((product) => {
        return (
          <div className="singleItem" key={product.id}>
            <p>Name: {product.name} </p>
            <p>Description: {product.description}</p>
            <p>Size: {product.size}</p>
            <p>Price: {product.price}</p>
            <img className="image" src={product.imageLink} />
            <button onClick={() => handleDelete(product.id)}>Delete</button>

            <Link to={`/update/${product.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
