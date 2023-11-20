import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();


const handleName = (e) => setName(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleSize = (e) => setSize(e.target.value);
const handlePrice = (e) => setPrice(e.target.value);
const handleGender = (e) => setGender(e.target.value);


const handleSubmit = async (e) => {
  try {
    e.preventDefault();

    const createProduct = {
      name,
      description,
      size,
      price,
      gender,
    };

    await axios.post(`${API_URL}/all`, createProduct);


    setName("");
    setDescription("");
    setSize("");
    setPrice("");
    setGender("");

    navigate("/");
  } catch (err) {
    return <p>No products found</p>;
  
  }
}
  
return (
  <>
    {/* <Navbar /> */}
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label>Size</label>
        <input
          className="form-control"
          type="text"
          name="size"
          placeholder="Size"
          value={size}
          onChange={handleSize}
        />

        <label>Price</label>
        <input
          className="form-control"
          type="number"
          name="price"
          value={price}
          onChange={handlePrice}
        />

        <label>Gender
          Option 1:
          <input
            type="radio"
            value="male"
            // checked={selectedOption === "male"}
            // onChange={handleOptionChange}
          />
        </label>
        <label>
          Option 2:
          <input
            type="radio"
            value="female"
            // checked={selectedOption === "female"}
            // onChange={handleOptionChange}
          />
        </label>
        <button className="btn btn-primary btn-round">Add Product</button>
      </form>
    </div>
  </>
)

}

export default AddProductForm;







// function AddProductForm(props) {
//   const [product, setProduct] = useState({
//     name:"",
//     description:"",
//     size: "",
//     price: "",
//     gender: "",

//   });


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//     .post (`${API_URL}/all`, product)
//     .then((response)=>{
//       console.log("Product added", response.data)
//     })
//     .catch((error)=>{
//       console.log("Error fetching the product", error);
//     });



//     // // clear the form
//     // setTitle("");
//     // setRating("");
//   };
// <div className="form">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//       </form>
//     </div>
//   ;



// }
