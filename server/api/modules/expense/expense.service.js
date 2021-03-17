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

const gettingExpenseBetweenDates = (startDate, endDate) => {
  return expenseDAO.getExpenseBetweenDates(startDate, endDate);
};

const gettingExpenseByCatergoryAndBetweenDates = (
  category,
  startDate,
  endDate
) => {
  return expenseDAO.getExpenseByCatergoryBetweenDates(
    category,
    startDate,
    endDate
  );
};

module.exports = {
  addingExpense,
  gettingExpense,
  updatingExpense,
  deletingExpense,
  gettingExpenseBetweenDates,
  gettingExpenseByCatergoryAndBetweenDates,
};
