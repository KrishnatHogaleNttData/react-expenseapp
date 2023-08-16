import "./components/Expenses/ExpenseItem.css";
import "./App.css";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React, { useEffect, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMMY_EXPENSE = [
  { id: "e1", tittle: "party", amount: 100, date: new Date(2023, 3, 27) },
  { id: "e2", tittle: "party2", amount: 200, date: new Date(2023, 3, 28) },
  { id: "e3", tittle: "party3", amount: 300, date: new Date(2023, 3, 29) },
  { id: "e4", tittle: "party4", amount: 400, date: new Date(2023, 3, 30) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  // function fetchdata(){
  //   fetch("")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setExpenses(data);
  //     });
  // }
  //fetch functionality
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(expense)

    // fetch('',{
    //   method:'POST',
    //   body:JSON.stringify(expense),
    //   headers:{
    //     'content-type':'application/json'
    //   }
    // }).then(response=>{
    //     fetchdata();
    // })
    //
    //
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses item={expenses} />
    </>
  );
};

export default App;
