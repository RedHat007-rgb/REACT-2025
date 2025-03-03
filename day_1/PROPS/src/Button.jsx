// Challenge 3: Button Variants
// 📌 Scenario: Your team needs a Button component that supports multiple styles.
// ✅ Props: 
// label, variant (primary, secondary, danger), size (small, medium, large), onClick.
// ✅ Bonus: Add conditional CSS to apply styles based on variant and size.





export default function Button({ label , variant , size }) {
  const variantStyles = {
    primary: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
    },
  };

  const sizeStyles = {
    small: {
      padding: "5px 10px",
      fontSize: "12px",
    },
    medium: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    large: {
      padding: "12px 20px",
      fontSize: "16px",
    },
  };

  return (
    <button style={{ ...variantStyles[variant], ...sizeStyles[size]}}>
      {label}
    </button>
  );
}
