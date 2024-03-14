import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is Auth Route");
});
router.get("/register", (req, res) => {
  res.send("This is Auth Register Route");
});

export default router;
