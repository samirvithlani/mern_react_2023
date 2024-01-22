import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";

export const CartComponent = () => {
  const state = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log("cart state...", state);
  return (
    <div>
      <div>
        <h1>Cart</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              state?.map((prod)=>{
                return(<tr>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>
                    <button onClick={()=>dispatch(removeFromCart(prod))}>DELETE</button>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
