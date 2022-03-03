import { Link } from "react-router-dom";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "../styles/card.scss";

const ProductComponent = ({ product }) => {
  const {
    id,
    title,
    price,
    image,
    rating: { count, rate },
  } = product;
  const titleTrimmer = (title) => {
    let newTitle = title.split("");
    newTitle.length = 16;
    return newTitle.join("");
  };
  return (
    <Col sm={6} md={4} lg={3}>
      <Link to={`/products/${id}`} style={{ textDecoration: "none", color: 'black'}}>
        <Card>
          <CardImg alt="Card image cap" src={image} top />
          <CardBody>
            <CardTitle tag="h5">{titleTrimmer(title)}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Raring: {rate} Count: {count}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-info" tag="h6">
              Price: {price}$
            </CardSubtitle>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductComponent;
