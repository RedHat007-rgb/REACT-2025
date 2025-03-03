// Challenge 4: Product List Component
// 📌 Scenario: You’re developing an e-commerce site. Build a ProductList component that renders an array of products using props.
// ✅ Props: An array of objects, each with id, title, price, and imageURL.
// ✅ Bonus: Render a “SALE” badge for products under $10.



export default function List({ products }) {
  console.log(products);

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    price: {
      fontSize: "16px",
      color: "#007bff",
    },
    saleBadge: {
      position: "absolute",
      top: "10px",
      left: "10px",
      backgroundColor: "red",
      color: "white",
      padding: "5px 10px",
      fontSize: "14px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {products.map((data) => (
        <div key={data.id} style={styles.card}>
          {data.price < 10 && <p style={styles.saleBadge}>Sale</p>}
          <img src={data.imageURL} alt={data.title} style={styles.image} />
          <h1 style={styles.title}>{data.title}</h1>
          <h2 style={styles.price}>${data.price}</h2>
        </div>
      ))}
    </div>
  );
}
