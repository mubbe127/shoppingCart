import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./ShopCart.css";

export { ShopCart };

function ShopCart() {
  const { items, deleteItem, clearItems } = useOutletContext();
  console.log(items);

  let totalAmount = Math.floor(
    items.reduce((prev, item) => prev + item.quantity * item.price, 0)
  );

  let totalQuantity = Math.floor(
    items.reduce((prev, item) => prev + item.quantity, 0)
  );

  return (
    <>
      <div className="headerCart">
        <h4>Your cart - {totalQuantity} Items </h4>
        <table className="cart table">
          <thead className="header">
            <tr>
              <th className="col Product" scope="col">
                Product
              </th>
              <th className="col Price" scope="col">
                Price
              </th>
              <th className="col Quantity" scope="col">
                Quantity
              </th>
              <th className="col Subtotal" scope="col">
                Subtotal
              </th>
              <th className="col Subtotal" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr className="row">
                <th className="title">
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <h5>{item.title}</h5>
                </th>
                <td className="price">${item.price}</td>
                <td className="quantity">{item.quantity}</td>
                <td className="subtotal">${item.quantity * item.price}</td>
                <td >
                  <div className="button"><button
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    Remove
                  </button>
                  </div>
                </td>
              </tr>
            ))}
            <tr className="emptyRow">
              <td></td>
            </tr>
            <tr className="lastRow">
              {" "}
              <th scope="row">Total</th>
              <td></td>
              <td></td>
              <td className="total">${totalAmount}</td>
              <td>
                <div className="button"><button onClick={clearItems}>Clear cart</button></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
