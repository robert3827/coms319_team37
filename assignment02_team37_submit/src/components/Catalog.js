import logo from '../logo.svg';
import './Catalog.css';
import React, { useState } from 'react';
import { Products } from '../Products';
import { Categories } from '../Categories'






function Catalog() {      //Need curly brackets if you export up here. Does it have anything to do with default
  const [cart, setCart] = useState([]);               //Array of items in my cart
  const [cartTotal, setCartTotal] = useState(0);      //Total Cost starting at 0


  console.log("Step 1 : load Products in a useState.");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  var [quantity, setQuantity] = useState([]);


  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products.filter(cat => cat.category === tag);
    // modify useState
    setProductsCategory(filtered);
    // ProductsCategory = filtered;
    console.log("Step 5 : ", Products.length, ProductsCategory.length);
  }
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("Step 6 : in handleChange, Target Value :", e.target.value, " Query Value :", query);
    const results = Products.filter(eachProduct => {
      if (e.target.value === "") return ProductsCategory;
      return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setProductsCategory(results);
  }

  return (

    <div className="flex fixed flex-row">
      {console.log("Step 2 : Return App :", Products.length, ProductsCategory.length)}

      {/* Side Bar */}
      <div className="h-screen  bg-slate-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
        <img className="w-full" src={logo} alt="React Logo" />
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white"> Product Catalog App </h1>
          <p className="text-gray-700 text-white">
            by - <b style={{ color: 'orange' }}>Design Shubham, Development Abraham</b>
          </p>
          <div className="py-10">
            {(Categories) ? <p className='text-white'>Tags : </p> : ''}
            {
              Categories.map(tag => <button onClick={() => { handleClick(tag) }} key={tag} className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2" >{tag}</button>)
            }
          </div>

          <div className="py-10">
            <input type="search" value={query} onChange={handleChange} />

          </div>

        </div>
      </div>
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log("Before render :", Products.length, ProductsCategory.length)}
        
        {/* Stuff from render products */}
        <div className='category-section fixed'>
          {console.log("Step 3 : in render_products ")}


          {/* Catalog */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">Products ({ProductsCategory.length})</h2>

          <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10" style={{ maxHeight: '800px', overflowY: 'scroll' }}>
            {/* Loop Products */}
            {ProductsCategory.map((product, index) => (
              <div key={index} className="group relative shadow-lg" >
                <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                  <img
                    alt="Product Image"
                    src={product.image}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="flex justify-between p-3">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        <span style={{ fontSize: '16px', fontWeight: '600' }}>{product.title}</span>
                      </a>
                      <p>Tag - {product.category}</p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Rating: {product.rating.rate}</p>
                  </div>
                  <p className="text-sm font-medium text-green-600">${product.price}</p>
                </div>
                {/* <div className='grid-cols-3'> */}
                {/*I should do something like add these quantities to a hash-table/dictionary. Currently they are in an array and I need to instantiate this array. I could use array but I don't quite know 
          if that is what I want to do.  */}
                {console.log("Hello from Catalog.js")}

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1' onClick={() => { setQuantity(quantity[index] = quantity[index] - 1); console.log(quantity); }}>-</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1' onClick={() => { setQuantity(quantity[index] = quantity[index] + 1); console.log(quantity); }}>+</button>
                <div>Quantity: {quantity[index]}</div>
                {/* </div> */}

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Catalog; //Don't need curly brackets if export down here
