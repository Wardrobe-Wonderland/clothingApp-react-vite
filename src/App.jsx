import { useState } from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MalePage from "./Pages/MalePage";
import FemalePage from "./Pages/FemalePage";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/male" element={<MalePage />} />
        <Route path="/female" element={<FemalePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create" element={<AddProductForm />} />
        <Route path="/update/:id" element={<UpdateProductForm />} />
        <Route path="/delete/:id" element={<ProductList />} />
        <Route path="/all/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
