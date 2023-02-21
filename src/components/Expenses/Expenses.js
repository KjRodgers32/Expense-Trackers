import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("Show All");
  const yearFilterHandeler = (year) => {
    setFilteredYear(year);
    // const newFilterYear = year;
    // props.filteredYear(newFilterYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    if (filteredYear !== "Show All") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return true;
    }
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          data={props.item}
          defaultYear={filteredYear}
          onYearFilter={yearFilterHandeler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
