
import "./index.css";
import "./Screen2.css";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import {useLocation} from "react-router-dom";
import { getGlobalData } from './globals';


function Screen2(props) {
  const location = useLocation();
  const globalValue = getGlobalData();
  if (globalValue == null){
    return  <Navigate to="/login"/>
  }
 
  console.log(props, "props");
  console.log(location, " useLocation Hook");

    return (
        <div className= "Screen2">  
          <div className= "overlap-wrapper">
            <div className = "overlap">
            <div className = "back">
                <li> <Link to = "/"> Back </Link></li>
         </div>
         <Link className = "history" to = '/history'>  History</Link>
              <h1 className = "product-comparisons">
                <span className ="productComparison">Product Comparisons</span>
            <div className="text-wrapper">
              <span className="similarityScore"> Similarity Score: </span>
              <span className="scoreResult"> {location.state.percSil} {'%'} </span>
            </div>
            <div className="text-wrapper">
              <span className="commonIngredients">Ingredients in common:</span> 
              <span className="ingrResult"> {
              (location.state.ingr_common).length >=1 ? location.state.ingr_common.map((result, idx) =>{
                return <span key={idx}> {result} {idx< (location.state.ingr_common).length-1 && ",  "} </span>
              })
              :'' } </span>
            </div>
            <div className="text-wrapper">
              <span className="product1Ingredients"> Ingredients only in Product 1:</span>
              <span className="p1Result"> { (location.state.product_one_ingr).length >=1 ? location.state.product_one_ingr.map((result, idx) =>{
                return <span key={idx}> {result} {idx< (location.state.product_one_ingr).length-1 && ",  "}</span>
              })
              :'' }</span>
            </div>
            <div className="text-wrapper">
              <span className="product2Ingredients"> Ingredients only in Product 2:</span>
              <span className="p2Result"> { (location.state.product_two_ingr).length >=1 ? location.state.product_two_ingr.map((result, idx) =>{
                return <span key={idx}> {result} {idx< (location.state.product_two_ingr).length-1 && ", "}</span>}) :''} </span>
            </div>
              </h1>

            </div>

          </div>

        </div>

    );
};

 export default Screen2;
 