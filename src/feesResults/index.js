import React from "react";
import "./styles.css";

const FeesResults = ({ text, total = 0 }) => {
  return (
    <div className="fees-single-container">
      <h3>{text}</h3>
      <h2>{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(total)}</h2>
    </div>
  );
};

export default FeesResults;
