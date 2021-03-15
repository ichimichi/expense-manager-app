const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    lowecase: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  expenseDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("expense", ExpenseSchema);
