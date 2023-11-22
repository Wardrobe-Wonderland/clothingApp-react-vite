import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://wardrobewonderland.adaptable.app/";

function ProductDetails() {
  const [requestedProduct, setRequestedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/all/${productId}`);
        
        setRequestedProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.log("error")
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      {!loading && (
        <>
          <img
            src={requestedProduct.imageLink}
            alt="product"
            height="500px"
            width="auto"
          />
          <h3>Name: {requestedProduct.name}</h3>
          <p>Size: {requestedProduct.size}</p>
          <p>Price: {requestedProduct.price}</p>

          <p>Description: {requestedProduct.description}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
