import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<{ name: string; price: number }[]>(
    []
  );

  useEffect(() => {
    fetch("https://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "product" + (prevState.length + 1),
        price: 100.0 + prevState.length * 100,
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
