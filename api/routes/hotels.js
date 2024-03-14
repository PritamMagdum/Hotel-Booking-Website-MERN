import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();
// create
router.post("/", async (req, res) => {
  // console.log("req is-->", req);
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

// update

// delete
// get
// get all

export default router;
