const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => {
  res.redirect("/diary");
});

module.exports = router;
