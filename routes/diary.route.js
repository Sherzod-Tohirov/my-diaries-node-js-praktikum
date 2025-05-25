const { Router } = require("express");

const {
  editDiary,
  getMyDiary,
  addNewDiary,
  deleteDiary,
  editDiaryPage,
  getSingleDiary,
} = require("../controllers/diary.controller");

const router = Router();

router.get("/", getMyDiary);
router.get("/add", addNewDiary);
router.post("/add", addNewDiary);
router.post("/edit/:id", editDiary);
router.get("/edit/:id", editDiaryPage);
router.post("/delete/:id", deleteDiary);
router.get("/:id", getSingleDiary);

module.exports = router;
