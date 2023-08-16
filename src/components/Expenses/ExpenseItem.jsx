import "./ExpenseItem.css";

import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  // const [newTittle, setNewTittle]=useState("  ");
  // const [tittle, setTittle] = useState(props.tittle);
// const changeHandler=(event)=>{
// setNewTittle(event.target.value)
// }

//   const clickHandler = () => {
//     setTittle(newTittle);
    
//   };
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div></div>
      <div></div>
      <div className="expense-item_description">
        <h2>{props.tittle}</h2>
        <div className="expense-item_price"> ${props.amount}</div>
      </div>
      {/* <input type="text" value={newTittle} onChange={changeHandler} />
      <button onClick={clickHandler}>change tittle</button> */}
    </Card>
  );
};

export default ExpenseItem;
