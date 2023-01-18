import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const nameList = ['Updated', 'New', 'Amazing']

    const clickHandler = () => {
        setTitle(nameList[Math.floor(Math.random() * nameList.length)]);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;