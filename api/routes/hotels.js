import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// create
router.post("/", verifyAdmin, createHotel);

// update
router.put("/:id", verifyAdmin, updateHotel);

// delete
router.delete("/:id", verifyAdmin, deleteHotel);

// get Hotel
router.get("/find/:id", getHotel);

// get all Hotels
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
