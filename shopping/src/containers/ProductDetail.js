import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";

const ProductDetail = () => {
  const selected = useSelector((state) => state.selectedProductReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchData = async () => {
    let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    if (response.status !== 200) return;
    let result = await response.data;
    dispatch(selectedProduct(result));
  };
  useEffect(() => {
    fetchData();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []); //[id]
  //
  return selected.id ? (
    <Row>
      <Col sm={2}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button color="secondary">Back</Button>
        </Link>
      </Col>
      <Col
        sm={{
          offset: 3,
          size: 6,
        }}
      >
        <Card>
          <CardBody>
            <CardTitle tag="h2">{selected.title}</CardTitle>
            <CardTitle tag="h6">{selected.category}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {selected.price}$
            </CardSubtitle>
          </CardBody>
          <img alt="Card image cap" src={`${selected.image}`} width="100%" />
          <CardBody>
            <CardText>{selected.description}</CardText>
            <Button color="primary">Add to Cart</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <h2 className="text-center">Loading...</h2>
  );
};

export default ProductDetail;
