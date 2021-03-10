const expenseDAO = require("./expense.dao");

const gettingExpense = () => {
  return expenseDAO.getExpense();
};

const addingExpense = (expense) => {
  return expenseDAO.addExpense(expense);
};

const updatingExpense = (id, expense) => {
  return expenseDAO.updateExpense(id, expense);
};

module.exports = {
  addingExpense,
  gettingExpense,
  updatingExpense,
};
