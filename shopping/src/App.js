import { Container } from "reactstrap";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./containers/Cart";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>404!</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
