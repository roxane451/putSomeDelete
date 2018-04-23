var express = require("express");
var router = express.Router();

router.get("/:name(\\D+)", (req, res, next) => {
  res.render("update-user", { name: req.params.name });
});

router.put("/:name", (req, res, next) => {
  res.send(`The new name is ${req.body.name}`);
});

router.get("/:id(\\d+)", (req, res, next) => {
  res.render("delete-user", { id: req.params.id });
});

router.delete("/:id(\\d+)", (req, res, next) => {
  res.send(`No more user with id ${req.params.id}`);
});

module.exports = router;
