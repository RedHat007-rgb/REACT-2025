import { useState } from "react";

function Product() {
  const [stock, setStock] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      stock: 5,
      description: "High-quality wireless headphones with noise cancellation.",
      image: "https://picsum.photos/150?random=1",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 129.99,
      stock: 10,
      description: "Fitness tracker with heart rate monitor and notifications.",
      image: "https://picsum.photos/150?random=2",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 39.99,
      stock: 15,
      description: "Portable speaker with rich sound and long battery life.",
      image: "https://picsum.photos/150?random=3",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 24.99,
      stock: 0,
      description: "Adjustable stand for ergonomic laptop use.",
      image: "https://picsum.photos/150?random=4",
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: 19.99,
      stock: 25,
      description: "Multi-port adapter for USB-C devices.",
      image: "https://picsum.photos/150?random=5",
    },
  ]);

  function handleStock(id) {
    setStock(
      stock.map((data) => {
        if (data.id === id && data.stock > 0) {
          return { ...data, stock: data.stock - 1 };
        }
        return data;
      })
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>E-COMMERCE PLATFORM</h2>
      <ProductCard productData={stock} handleStock={handleStock} />
    </div>
  );
}

function ProductCard({ productData, handleStock }) {
  return (
    <div style={styles.grid}>
      {productData.map((data) => (
        <div key={data.id} style={styles.card}>
          <img src={data.image} alt={data.name} style={styles.image} />
          <h3 style={styles.productName}>{data.name}</h3>
          <p style={styles.price}>${data.price.toFixed(2)}</p>
          <p style={styles.description}>{data.description}</p>
          {data.stock <= 0 ? (
            <p style={styles.outOfStock}>Out of Stock</p>
          ) : (
            <p style={styles.stock}>{data.stock} left – Hurry!</p>
          )}
          {data.stock > 0 && (
            <button style={styles.button} onClick={() => handleStock(data.id)}>
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007BFF",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  stock: {
    fontSize: "14px",
    color: "#28a745",
    fontWeight: "bold",
  },
  outOfStock: {
    fontSize: "14px",
    color: "red",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

function App() {
  return <Product />;
}

export default App;
