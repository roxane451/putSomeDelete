var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET COUCOU. */

router.get("/coucou-pug", function(req, res, next) {
  res.render("coucou", { sayHello: "Hello Buddy!" });
});

router.get("/forms-:number(\\d+)", function(req, res, next) {
  console.log(req.query.level);
  console.log(req.params.number);
});

router.post("/forms-:number(\\d+)", function(req, res, next) {
  console.log(req.body.username);
});

router.get(
  "/superMiddleware",
  (req, res, next) => {
    console.log("Hello middleware");
    next();
  },
  (req, res, next) => {
    res.send("Hello world");
  }
);

router.get("/session-in", (req, res) => {
  req.session.song = "be bop a lula";
  res.send("Song");
});

router.get("/session-out", (req, res) => {
  res.send(req.session.song);
});

module.exports = router;
