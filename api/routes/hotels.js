import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel } from "../controllers/hotel.js";

const router = express.Router();
// create
router.post("/", createHotel);

// update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

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
