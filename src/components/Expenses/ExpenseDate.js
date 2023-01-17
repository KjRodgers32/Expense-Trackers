import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const months = props.date.toLocaleString('en-US', {month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: "2-digit"});

    return (
        <div className="expense-date">
            <div className='expense-date__month'>{months}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;