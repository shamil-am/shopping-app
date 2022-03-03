import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";

const ProductList = () => {
  const state = useSelector((state) => state);
  const fetchData = async () => {
    let response = await axios.get("https://fakestoreapi.com/products/1");
    if(response.status !== 200) return;
    let result = await response.data
    console.log(result)
  };
  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, []);
  return (
    <Row>
      <ProductComponent />
    </Row>
  );
};

export default ProductList;
