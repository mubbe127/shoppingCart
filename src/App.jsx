import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem, amount) {
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
      <Outlet context={{ addItem, items, deleteItem, clearItems }} />
    </>
  );
}

export default App;
