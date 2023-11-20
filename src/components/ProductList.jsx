import React from 'react';

function ProductList(props) {

  return (
    <div >
      <h2>Product List</h2>
      {props.products.map((product)=>{
         return (
          <div className='singleItem' key={product.id} >
            <p>Name: {product.name} </p>
            <p>Description: {product.description}</p>
            <p>Size: {product.size}</p>
            <p>Price: {product.price}</p>
            <img className="image" src={product.imageLink} />

          </div>
         )
      })}
      
    </div>
      
    
  );
}

export default ProductList;
