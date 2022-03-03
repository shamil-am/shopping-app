import { Container } from "reactstrap";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<h1>404!</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
