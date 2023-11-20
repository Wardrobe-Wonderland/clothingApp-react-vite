import React, { useState } from 'react';


function AddProductForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      Name: name,
    }
  return (
    <div>
      <h2>Add Product Form</h2>
    </div>
  );
}
}

export default AddProductForm;
