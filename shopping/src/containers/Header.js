import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row>
      <Col sm={12}>
        <Link to="/" className="text-dark">
          <h2>Trendyol</h2>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
