import "./Title.css";

function Title({ title, desc, price }) {
  let styles = { backgroundColor: price > 15000 ? "pink" : "" };
  return (
    <div className="title" style={styles}>
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <p>price : {price}</p>
      {price >= 15000 && <p>Discount : 5%</p>}
    </div>
  );
}

export default Title;
