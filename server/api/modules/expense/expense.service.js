const expenseDAO = require("./expense.dao");

const gettingExpense = () => {
  return expenseDAO.getExpense();
};

const gettingExpenseBetweenDates = (startDate, endDate) => {
  return expenseDAO.getExpenseBetweenDates(startDate, endDate);
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
  gettingExpenseBetweenDates,
};
