import React, { useState } from 'react';
import Product from './HDDs';
import './HDD.css';




const App = () => {
    const [products, setProducts] = useState([
      {
        id: 1,
        name: 'DiskAsure M2',
        description: 'Description for Product 1',
        price: 19.99,
        image:'src/images/HDD1.jpg'
      },
      {
        id: 2,
        name: 'DiskAsure 2',
        description: 'Description for Product 2',
        price: 29.99,
        image: 'src/images/HDD2.jpg'
      },
      {
        id: 3,
        name: 'DiskAsure Pro2',
        description: 'Description for Product 2',
        price: 29.99,
        image: 'src/images/HDD4.jpg'
      },
      {
        id: 4,
        name: 'DiskAsure DT2',
        description: 'Description for Product 2',
        price: 29.99,
        image: 'src/images/HDD4.jpg'
      },
      // Add more products as needed
    ]);
  
    return (
      <div className="App">
        <h1>Product List</h1>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };


  export default App;