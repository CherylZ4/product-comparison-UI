import "./index.css";
import "./Screen1.css";
import { Link, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getGlobalData } from './globals';



function Screen1() {

  const globalValue = getGlobalData();
  const [goToNext, setGoToNext] = useState(false);
  const [formvalue, setFormvalue] = useState({ product_one: '', product_two: '' });
  const [response, setResponse] = useState({});

  if (globalValue == null) {
    return <Navigate to="/login" />
  }


  const handleSumbit = (e) => {
    e.preventDefault();
    const data = {
      product_one: formvalue.product_one,
      product_two: formvalue.product_two,
      user_email: globalValue
    }

    axios.post('http://localhost:8080/ingredients', data).then(res => {
      console.log(res.data);
      const dataResponse = res.data;
      setResponse(dataResponse);
      // setResponse({ percSil: '5', product_one_ingr: '', product_two_ingr: '', ingr_common: '' }); 
      setGoToNext(true);

    }
    ).catch(error => {
      console.log(error)
    })


  }


  if (goToNext) {
    return <Navigate to="/compare" state={{ percSil: response.percSil, product_one_ingr: response.product_one_ingr, product_two_ingr: response.product_two_ingr, ingr_common: response.ingr_common }} />;

  }




  const handleInput = (e) => {
    e.persist();
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });


  }
  return (

    <div className="Screen1">


      <h1 className="product-comparisons">
        <span className="productComparison" >Product Comparisons</span>
      </h1>

      <span className="product1"> Product 1: </span>

      <span className="product2">Product 2:</span>

      <Link className="login" to='/login'>  Login</Link>


      <Link className="history" to='/history'>  History</Link>

      <form onSubmit={handleSumbit}>
        <input className="box1" type="text" name="product_one" value={formvalue.product_one} onChange={handleInput} />
        <input className="box2" type="text" name="product_two" value={formvalue.product_two} onChange={handleInput} />
        <input className="button1" type="submit" value="Compare" />
      </form>
    </div>


  );

};



export default Screen1;

