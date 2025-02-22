import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Container, Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        quantityInStock: 10,
        description: "teste",
        name: "product" + (prevState.length + 1),
        price: 100.0 + prevState.length * 100,
        pictureUrl: "https://picsum.photo/200",
        type: "teste",
        brand: "teste,",
      },
    ]);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">ReStore</Typography>
      <Catalog products={products} addProduct={addProduct}></Catalog>
    </Container>
  );
}

export default App;
