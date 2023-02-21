import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterYearHandeler = (event) => {
    props.onYearFilter(event.target.value);
  };

  const filteredYears = props.data
    .map((element) => {
      return element.date.getFullYear().toString();
    })
    .filter((value, index, list) => list.indexOf(value) === index);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select onChange={filterYearHandeler}>
          <option value="Show All">Show All</option>
          {filteredYears.map((x) => {
            return <option value={x}>{x}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
