import React, { useState } from "react";
import axios from 'axios';


function AddProductForm(props) {
  const [product, setProduct] = useState({
    name:"",
    description:"",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();

    


    // clear the form
    setTitle("");
    setRating("");
  };
}

export default AddProductForm;
