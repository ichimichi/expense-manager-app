const router = require("express").Router();
const expenseController = require("./expense.controller");

router.get("/", (req, res) => {
  expenseController.getExpense().then((response) => {
    res.status(response.status).send(response);
  });
});

router.post("/", (req, res) => {
  expenseController.addExpense(req.body).then((response) => {
    res.status(response.status).send(response);
  });
});

router.put("/:id", (req, res) => {
  expenseController.updateExpense(req.params.id, req.body).then((response) => {
    res.status(response.status).send(response);
  });
});

router.delete("/:id", (req, res) => {
  expenseController.deleteExpense(req.params.id).then((response) => {
    res.status(response.status).send(response);
  });
});

module.exports = router;
