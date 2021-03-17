const { uuid } = require("uuidv4");
const fs = require("fs");

const db = `${process.cwd()}\\server\\db.json`;

const getExpense = () => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(db, "utf8");

      const expenses = JSON.parse(data);
      resolve({
        message: "Successfully Retrieved all Expenses",
        expenses: expenses,
        status: 200,
      });
    } catch (e) {
      reject({ message: "Internal Server Error", status: 500 });
    }
  });
};

const addExpense = (expense) => {
  return new Promise((resolve, reject) => {
    expense.id = uuid();
    expense.expenseDate = new Date();

    try {
      let data = fs.readFileSync(db, "utf8");

      const expenses = JSON.parse(data);
      expenses.push(expense);
      data = JSON.stringify(expenses, null, 4);

      fs.writeFileSync(db, data, "utf8");

      resolve({
        message: "Successfully added Expense",
        expense: expense,
        status: 201,
      });
    } catch (err) {
      reject({ message: "Internal Server Error", status: 500 });
    }
  });
};

const updateExpense = (id, updatedExpense) => {
  return new Promise((resolve, reject) => {
    try {
      // convert JSON object to a string
      let data = fs.readFileSync(db, "utf8");

      const expenses = JSON.parse(data);

      expenses.map((expense, i) => {
        if (expense.id === id) {
          expenses[i] = updatedExpense;
        }
      });

      data = JSON.stringify(expenses, null, 4);

      fs.writeFileSync(db, data, "utf8");

      resolve({
        message: "Successfully updated Expense",
        expense: updatedExpense,
        status: 200,
      });
    } catch (err) {
      reject({ message: "Internal Server Error", status: 500 });
    }
  });
};

const deleteExpense = (id) => {
  return new Promise((resolve, reject) => {
    try {
      // convert JSON object to a string
      let data = fs.readFileSync(db, "utf8");

      let expenses = JSON.parse(data);

      expenses = expenses.filter((expense) => expense.id !== id);

      data = JSON.stringify(expenses, null, 4);

      fs.writeFileSync(db, data, "utf8");

      resolve({
        message: "Successfully deleted Expense",
        status: 200,
      });
    } catch (err) {
      reject({ message: "Internal Server Error", status: 500 });
    }
  });
};

const getExpenseBetweenDates = (startDate, endDate) => {
  // TODO
};

const getExpenseByCatergoryBetweenDates = (category, startDate, endDate) => {
  // TODO
};

module.exports = {
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  getExpenseBetweenDates,
  getExpenseByCatergoryBetweenDates,
};
