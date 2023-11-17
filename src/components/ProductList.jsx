import React from 'react';

function ProductList(props) {

  return (
    <div>
      <h2>Product List</h2>
      {props.products.map((product)=>{
         return (
          <div>
            <p>{product.name}</p>
            <p>{product.size}</p>
            <img className="image" src={product.imageLink} />

          </div>
         )
      })}
      
    </div>
      
    
  );
}

export default ProductList;
