import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <Row>
      <Col sm={6}>
        <Link to="/" className="text-dark">
          <h2>MyShop</h2>
        </Link>
      </Col>
      <Col sm={6}>
      <Link to="/cart" className="text-dark">
      <h4>Cart: {cart.length}</h4> 
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
