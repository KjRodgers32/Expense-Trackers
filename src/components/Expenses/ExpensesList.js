import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p style={{ color: "white" }}>No Expenses Found.</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((x) => (
      <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
