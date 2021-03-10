const expenseService = require("./expense.service");

const getExpense = () => {
  return expenseService.gettingExpense();
};

const addExpense = (expense) => {
  return expenseService.addingExpense(expense);
};

const updateExpense = (id, expense) => {
  return expenseService.updatingExpense(id, expense);
};

module.exports = {
  addExpense,
  getExpense,
  updateExpense,
};
