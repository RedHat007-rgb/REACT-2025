import { useState } from "react";

function Product() {
  const [cart, setCart] = useState([]);
  const [price, SetTotalPrice] = useState(0);
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
          setCart([...cart, data]);
          SetTotalPrice((prev) => prev + data.price);
          return { ...data, stock: data.stock - 1 };
        }
        return data;
      })
    );
  }

  function handleRemoveFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>E-COMMERCE PLATFORM</h2>
      <ProductCard productData={stock} handleStock={handleStock} />
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} price={price} />
    </div>
  );
}

function Cart({ handleRemoveFromCart, cart, price }) {
  return (
    <div style={styles.cartContainer}>
      <h3>CART</h3>
      {cart.map((data) => (
        <div key={data.id} style={styles.cartItem}>
          <img src={data.image} alt={data.name} style={styles.image} />
          <h3 style={styles.productName}>{data.name}</h3>
          <p style={styles.price}>${data.price.toFixed(2)}</p>
          <p style={styles.description}>{data.description}</p>
          <button style={styles.removeButton} onClick={() => handleRemoveFromCart(data.id)}>
            Remove
          </button>
        </div>
      ))}
      <h3 style={styles.totalPrice}>Total price: ${price.toFixed(2)}</h3>
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

function App() {
  return <Product />;
}

export default App;

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease-in-out",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  image: {
    width: "100%",
    height: "180px",
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
    color: "#007BFF",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  stock: {
    fontSize: "14px",
    color: "green",
    fontWeight: "bold",
  },
  outOfStock: {
    fontSize: "14px",
    color: "red",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  cartContainer: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  removeButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  },
  removeButtonHover: {
    backgroundColor: "#b30000",
  },
  totalPrice: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};
