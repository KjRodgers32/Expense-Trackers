import React, { useState } from "react";

import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 25),
  },
  { id: "e2", title: "New TV", amount: 799.59, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [array, setArray] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setArray((prevArray) => {
      return [expense, ...prevArray];
    });
  };

  const [filter, setFilter] = useState("");

  const addFilterYear = (year) => {
    setFilter(year);
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={array} filteredYear={addFilterYear} />
    </div>
  );
};

export default App;
