const products = [
  { name: "product1", price: 100.0 },
  { name: "product2", price: 200.0 },
  { name: "product2", price: 300.0 },
];

function App() {
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
    </>
  );
}

export default App;
