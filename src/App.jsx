import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem, amount, setItemAdded) {

    if(amount===""){
      return
    }
    const value = parseInt(amount);
    setItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);

      if (itemExists) {
        return prevItems.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + value };
          }
          return item;
        });
      } else {
        
        return [{...newItem, quantity: value}, ...prevItems];
      }
    });
    setItemAdded(value)
    setTimeout(()=>{
      setItemAdded(false)
    },1000)
  }

  function changeQuantity(newItem, amount) {
    let value;
    if(amount==="") {
      value = 0
    }
    else value = parseInt(amount);
    setItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);  
      if (itemExists) {
        return prevItems.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: value };
          }
          return item;
        });
      } else {
        
        return [{...newItem, quantity: value}, ...prevItems];
      }
    });

  }

  function deleteItem(removeItem) {
    setItems(items.filter(item => removeItem.id !== item.id))
  }

  function clearItems() {

    setItems([])
  }

  console.log(items);

  return (
    <>
      <NavBar items={items}/>
      <Outlet context={{ addItem, items, deleteItem, clearItems, changeQuantity }} />

     
    </>
  );
}
/* Återstår ErrorPage, modularisesra css samt test system */
export default App;
