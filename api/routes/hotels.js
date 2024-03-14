import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, updateHotel } from "../controllers/hotel.js";

const router = express.Router();
// create
router.post("/", createHotel);

// update
router.put("/:id", updateHotel);

// delete
router.delete("/:id", deleteHotel);

// get Hotel
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const hotel = await Hotel.findById(req.params.id);
    // console.log("Hotel -->", hotel);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all
router.get("/", async (req, res, next) => {
  try {
    const Hotels = await Hotel.find();
    res.status(200).json(Hotels);
  } catch (err) {
    next(err);
  }
});

export default router;
