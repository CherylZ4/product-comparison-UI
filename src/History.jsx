import "./index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./History.css";
import axios from 'axios';
import { getGlobalData } from './globals';
import {Navigate } from "react-router-dom";


function History() {
   const [response, setResponse] = useState({});
   const globalValue = getGlobalData();
   const previousGlobalValue = "";
   useEffect(() => {
       if (globalValue != null) {
      const request = {
         userEmail: globalValue
      }


      axios.post('http://localhost:8080/history', request).then(res => {
         console.log(res.data);
         const dataResponse = res.data;
         setResponse(dataResponse);

         
      }
      ).catch(error => {
         console.log(error)
      });
   }
   }, [globalValue]);

   if (globalValue == null){
      return  <Navigate to="/login"/>
     
    }

   return (
      <div className="History">
         <span className="searchHistory">
            Search History
         </span>
         
    <div>
    <Link className = "home2" to = '/'>  Home</Link>
      {response.ProductRecords && response.ProductRecords.map((record, index) => (
            <div key={index} className="record">
               <p>Product 1: {record.product1}</p>
               <p>Product 2: {record.product2}</p>
               <p>Common Ingredients: {record.ingr_common}</p>
               <p>Unique Ingredients of Product 1: {record.p1ingr}</p>
               <p>Unique Ingredients of Product 2: {record.p2ingr}</p>
            </div>
         ))}
    </div>
      </div>

   );
};

export default History;


