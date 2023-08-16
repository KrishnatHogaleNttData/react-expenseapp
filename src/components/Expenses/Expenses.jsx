import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

import React from "react";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map(expense => (
        <ExpenseItem
        key={expense.id}
          date={expense.date}
          tittle={expense.tittle}
          amount={expense.amount} //price
        />
      ))}
    </Card>
  );
};

export default Expenses;
