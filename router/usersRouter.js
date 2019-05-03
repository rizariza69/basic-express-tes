const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("its users page");
});
router.get("/register", (req, res) => {
  res.send("register");
});

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/");

module.exports = router;
