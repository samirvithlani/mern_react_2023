import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>PRODUCTS</h1>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200/300"
          class="card-img-top"
          alt="..."
        />
         <button
          onClick={() => {
            dispatch(addToCart({ id: 11, name: "iphone", price: 200 }));
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=90&crop=false"
          class="card-img-top"
          alt="..."
        />
        <button
          onClick={() => {
            dispatch(addToCart({ id: 1, name: "apple", price: 100 }));
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
