import "./index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./History.css";
import axios from 'axios';
import { getGlobalData } from './globals';


function History() {
   const globalValue = getGlobalData();

   const [response, setResponse] = useState({});

   
   useEffect(() => {
   
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

}, []); 

   return (
      <div className="History">
         <span className="searchHistory">
            Search History
         </span>
         <div>{JSON.stringify(response)}</div>
         <Link className="home" to='/'>  Home </Link>
      </div>


   );
};

export default History;


