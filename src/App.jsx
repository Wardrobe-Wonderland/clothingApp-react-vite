import { useState } from 'react';
import Homepage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MalePage from './Pages/MalePage';
import FemalePage from './Pages/FemalePage';
import ProductPage from './Pages/ProductPage';
import './App.css'
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProductForm from './components/AddProductForm';
import UpdateProductForm from './components/UpdateProductForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Wardrobe Wonderland</h1>
      </div>
       <Homepage />
       <AboutPage />
       <MalePage />
       <FemalePage />
       <ProductPage />
       <AddProductForm />
       <ProductDetails />
       <ProductList />
       <UpdateProductForm />
    </>
  )
}

export default App
