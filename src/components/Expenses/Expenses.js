import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearFilterHandeler = (year) => {
    setFilteredYear(year);
    // const newFilterYear = year;
    // props.filteredYear(newFilterYear);
  };

  //   const isYear = (expense) => {
  //     if (filteredYear !== "Show All") {
  //       return expense.props.date.getFullYear().toString() === filteredYear;
  //     } else {
  //       return true;
  //     }

  const filteredExpenses = props.item.filter((expense) => {
    if (filteredYear !== "Show All") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return true;
    }
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((x) => (
      <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onYearFilter={yearFilterHandeler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
