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

const deletingExpense = (id) => {
  return expenseDAO.deleteExpense(id);
};

module.exports = {
  addingExpense,
  gettingExpense,
  updatingExpense,
  deletingExpense,
};
