import { useEffect, useState } from "react";
import { Product } from "./Product";

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
    <>
      <h1>ReStore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
}

export default App;
