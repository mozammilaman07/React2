import "./Title.css";

function Title({ title, desc, price }) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <p>price : {price}</p>
      {price >= 15000 && <p>Discount : 5%</p>}
    </div>
  );
}

export default Title;
