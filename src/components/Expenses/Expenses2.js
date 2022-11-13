import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [items, setItems] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearFunc = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    //  setExpenses((prevExpenses) => {
    // return [expense, ...prevExpenses];
    // });
    // setItems(
    //   props.items.filter((el) => {
    //     return el.date.getFullYear() == selectedYear;
    //   })
    // );
  };

  // let expenseNow = <p>No Expenses Left</p>;

  // if (filteredYearFunc.length > 0) {
  //   expenseNow = filteredYearFunc.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredYearFunc} />

        {/* {expenseNow} */}

        <ExpenseList items={filteredYearFunc} />
        {/* 
        {filteredYearFunc.length === 0 && <p>No Expenses Left</p>}

        {filteredYearFunc.length > 0 &&
          filteredYearFunc.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredYearFunc.length === 0 ? (
          <p>No Expenses Left here</p>
        ) : (
          filteredYearFunc.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* {filteredYearFunc.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
