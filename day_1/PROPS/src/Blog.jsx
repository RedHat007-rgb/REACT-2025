export default function Blog({ title, excerpt, author, date,  isFeatured }) {
  const styles = {
    container: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      margin: "15px 0",
      backgroundColor: "#fff",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out",
    },
    featured: {
      border: "2px solid gold",
      backgroundColor: "#fff8dc",
      transform: "scale(1.05)",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    excerpt: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "10px",
    },
    authorDate: {
      fontSize: "14px",
      color: "#777",
      fontStyle: "italic",
    },
  };

  return (
    <>
      {isFeatured ? (
        <div style={ {...styles.container}}>
          <h1 style={styles.title}>{title}</h1>
          <h2 style={styles.excerpt}>{excerpt}</h2>
          <h3 style={styles.author}>{author}</h3>
          <h4 style={styles.authorDate}>{date}</h4>
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <h2>{excerpt}</h2>
          <h3>{author}</h3>
          <h4>{date}</h4>
        </div>
      )}
    </>
  );
}
