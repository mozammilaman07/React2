import Price from "./Price";
import "./Product.css";

export default function Product({ title, idx }) {
  let oldPrice = ["11,590", "12,990", "1,299", "10,990"];
  let newPrice = ["10,990", "11,199", "899", "9,999"];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Description</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
