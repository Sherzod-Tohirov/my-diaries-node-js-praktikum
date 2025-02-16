const { Router } = require("express");

const { getMyDiary, addNewDiary } = require("../controllers/diary.controller");

const router = Router();

router.get("/", getMyDiary);
router.get("/add-diary", addNewDiary);
router.post("/add-diary", addNewDiary);

module.exports = router;
