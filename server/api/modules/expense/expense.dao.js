const ExpenseModel = require("./expense.entity");
const { uuid } = require("uuidv4");

const getExpense = () => {
  return new Promise((resolve, reject) => {
    ExpenseModel.find({}, (error, expenses) => {
      if (error) {
        reject({ message: "Internal Server Error", status: 500 });
      } else {
        resolve({
          message: "Successfully Retrieved all Expenses",
          expenses: expenses,
          status: 200,
        });
      }
    });
  });
};

const addExpense = (expense) => {
  return new Promise((resolve, reject) => {
    let newExpense = new ExpenseModel();
    newExpense.id = uuid();
    newExpense.title = expense.title;
    newExpense.category = expense.category;
    newExpense.description = expense.description;
    newExpense.amount = expense.amount;
    newExpense.expenseDate = new Date().toISOString();

    newExpense.save((error, addedExpense) => {
      if (error) {
        reject({ message: "Internal Server Error", status: 500 });
      } else {
        resolve({
          message: "Successfully Added Expense",
          addedExpense: addedExpense,
          status: 200,
        });
      }
    });
  });
};

const updateExpense = (id, expense) => {
  return new Promise((resolve, reject) => {
    ExpenseModel.findOneAndUpdate(
      { id: id },
      expense,
      { new: true },
      (error, updatedExpense) => {
        if (error) {
          reject({ message: "Internal Server Error", status: 500 });
        } else {
          resolve({
            message: "Successfully Updated Expense",
            addedExpense: updatedExpense,
            status: 200,
          });
        }
      }
    );
  });
};

const deleteExpense = (id) => {
  return new Promise((resolve, reject) => {
    ExpenseModel.findOneAndDelete({ id: id }, (error) => {
      if (error) {
        reject({ message: "Internal Server Error", status: 500 });
      } else {
        resolve({
          message: "Successfully Deleted Expense",
          status: 200,
        });
      }
    });
  });
};

module.exports = {
  addExpense,
  getExpense,
  updateExpense,
  deleteExpense,
};
