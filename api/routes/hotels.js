import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();
// create
router.post("/", createHotel);

// update
router.put("/:id", updateHotel);

// delete
router.delete("/:id", deleteHotel);

// get Hotel
router.get("/:id", getHotel);

// get all
router.get("/", getHotels);

export default router;
