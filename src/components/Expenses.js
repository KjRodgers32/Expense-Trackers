import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem
                title={props.expense[0].title}
                amount={props.expense[0].amount}
                date={props.expense[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expense[1].title}
                amount={props.expense[1].amount}
                date={props.expense[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expense[2].title}
                amount={props.expense[2].amount}
                date={props.expense[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expense[3].title}
                amount={props.expense[3].amount}
                date={props.expense[3].date}
            ></ExpenseItem>
        </div>
    );
}

export default Expenses;