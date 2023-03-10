import "./App.css";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const selectCart = (state) => state.cart;

export const products = [
  {
    title: "Apple",
    id: 1,
    price: 1.49,
    numinCart: 0,
  },
  {
    title: "Orange",
    id: 2,
    price: 2.15,
    numinCart: 0,
  },
  {
    title: "Grapes",
    id: 3,
    price: 2.49,
    numinCart: 0,
  },
  {
    title: "Kiwi",
    id: 4,
    price: 2.99,
    numinCart: 0,
  },
];

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  // console.log(cart);

  return (
    <div className="App">
      <h1>Redux Basics 2</h1>
      <div className="products">
        <h2
          style={{
            width: "100%",
            marginTop: "50px",
            border: "1px solid black",
          }}
        >
          Products
        </h2>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>
                <b>{product.price}</b>
              </p>

              <button
                onClick={() => {
                  dispatch({ type: "addToCart", payload: product.id });
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart">
        <h2
          style={{
            width: "100%",
            marginTop: "50px",
            border: "1px solid black",
          }}
        >
          Cart
        </h2>
        {cart
          .filter((prod) => prod.numinCart > 0)
          .map((cartProd) => {
            return (
              <div key={cartProd.id}>
                <p>{cartProd.title}</p>
                <p>Number of Items : {cartProd.numinCart}</p>
                <button
                  onClick={() => {
                    dispatch({ type: "removeFromCart", payload: cartProd.id });
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "addToCart", payload: cartProd.id });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "resetCart", payload: cartProd.id });
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
