const router = require("express").Router();
const expenseController = require("./expense.controller");

router.get("/", (req, res) => {
  expenseController
    .getExpense()
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.post("/", (req, res) => {
  expenseController
    .addExpense(req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.put("/:id", (req, res) => {
  expenseController
    .updateExpense(req.params.id, req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.delete("/:id", (req, res) => {
  expenseController
    .deleteExpense(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.get("/:start/:end?", (req, res) => {
  expenseController
    .getExpenseBetweenDates(
      new Date(req.params.start),
      new Date(req.params.end)
    )
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.get(":category/:start/:end?", (req, res) => {
  expenseController
    .getExpenseBetweenDates(
      req.params.category,
      new Date(req.params.start),
      new Date(req.params.end)
    )
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

module.exports = router;
