const { Router } = require("express");

const {
  getMyDiary,
  addNewDiary,
  getSingleDiary,
} = require("../controllers/diary.controller");

const router = Router();

router.get("/", getMyDiary);
router.get("/:id", getSingleDiary);
router.get("/add", addNewDiary);
router.post("/add", addNewDiary);

module.exports = router;
