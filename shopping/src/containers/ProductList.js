import { useSelector, useDispatch } from "react-redux";
import { Row } from "reactstrap";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { setProducts } from "../redux/actions/productActions";
//
const ProductList = () => {
  const [loaded, setLoaded] = useState(false);
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const fetchData = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    if (response.status !== 200) return;
    let result = await response.data;
    dispatch(setProducts(result));
    setLoaded(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return loaded ? (
    <Row>
      {products.map((product) => {
        return <ProductComponent product={product} key={product.id} />;
      })}
    </Row>
  ) : (
    <h2 className="text-center">LOADING...</h2>
  );
};

export default ProductList;
