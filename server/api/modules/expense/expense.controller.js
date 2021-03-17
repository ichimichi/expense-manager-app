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

const deleteExpense = (id) => {
  return expenseService.deletingExpense(id);
};

const getExpenseBetweenDates = (startDate, endDate) => {
  return expenseService.gettingExpenseBetweenDates(startDate, endDate);
};

const getExpenseByCatergoryBetweenDates = (category, startDate, endDate) => {
  return expenseService.gettingExpenseByCatergoryAndBetweenDates(
    category,
    startDate,
    endDate
  );
};

module.exports = {
  addExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  getExpenseBetweenDates,
  getExpenseByCatergoryBetweenDates,
};
