export { Shop };
import { Product } from "./Product";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom"; // Import the hook
import "./Shop.css";

function Shop() {
  const { addItem } = useOutletContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <p>Välkommen till affären!</p>
      <div className="productList">
        {data &&
          data.map((item) => (
            <Product addItem={addItem} item={item} key={item.id} />
          ))}
      </div>
    </>
  );
}
