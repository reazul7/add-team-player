import React from "react";

const AddPlayer = (props) => {
  const addPlayer = props.addPlayer;
  let name = [];
  let price = [];
  for (let i = 0; i < addPlayer.length; i++) {
    const element = addPlayer[i];
    const newPrice = addPlayer[i].salary;
    name.push(element.name.split(" ,"));
    price.push(newPrice);
  }
  const playerTotalPrice = addPlayer.reduce(
    (total, prod) => total + prod.salary,
    0
  );
  return (
    <>
      <h2>Added Player: {props.addPlayer.length}</h2>
      <div>
        <b>PlayerName:</b>
        {name.map((name) => (
          <span> {name}, </span>
        ))}
      </div>
      <div>
        <b>PlayerPrice:</b>
        {price.map((price) => (
          <span> {price}, </span>
        ))}
      </div>
      <h2>Total Price: {playerTotalPrice}</h2>
    </>
  );
};

export default AddPlayer;
