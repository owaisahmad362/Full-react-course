// import React from "react"
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./Components/Container";
import Foodinput from "./Components/Foodinput";
import { useState } from "react";

function App() {
  //  let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>;         //Use of if-else statement in react
  // }
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
  };

  return ( 
    <>
  <Container>
   <h1 className="food-heading">Healthy Food</h1>
   <Foodinput handleKeyDown={onKeyDown}></Foodinput>
   <ErrorMessage items={foodItems}></ErrorMessage>
   <FoodItems items={foodItems}></FoodItems>
</Container>

</>
  );
}

export default App;
