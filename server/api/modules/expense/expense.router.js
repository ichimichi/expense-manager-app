const router = require("express").Router();
const { stringToDate } = require("../../../util/date");
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
      stringToDate(req.params.start),
      stringToDate(req.params.end)
    )
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.get("/:category/:start/:end?", (req, res) => {
  expenseController
    .getExpenseByCatergoryBetweenDates(
      req.params.category,
      stringToDate(req.params.start),
      stringToDate(req.params.end)
    )
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

module.exports = router;
