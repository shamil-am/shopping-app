import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
const Cart = () => {
  const productsInCart = useSelector((state) => state.cartReducer);
  return (
    <div>
      <h1>Cart</h1>
      <Table borderless hover responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Product</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {console.log(productsInCart)}
          {productsInCart.map((product, index) => {
            return (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={product.image}
                    style={{ height: "2rem", width: "2rem" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.count}</td>
                <td>{product.price * product.count} $</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
