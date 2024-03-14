import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello User You are Logged In!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send(
//     "Hello User You are Logged In and You can delete and update your account!"
//   );
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(
//     "Hello Admin You are Logged In and You can delete and update All accounts!"
//   );
// });

// update
router.put("/:id", verifyUser, updateUser);

// delete
router.delete("/:id", verifyUser, deleteUser);

// get Hotel
router.get("/:id", verifyUser, getUser);

// get all
router.get("/", verifyAdmin, getUsers);

export default router;
