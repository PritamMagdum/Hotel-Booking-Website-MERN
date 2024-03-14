import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello User You are Logged In!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send(
    "Hello User You are Logged In and You can delete and update your account!"
  );
});

// update
router.put("/:id", updateUser);

// delete
router.delete("/:id", deleteUser);

// get Hotel
router.get("/:id", getUser);

// get all
router.get("/", getUsers);

export default router;
