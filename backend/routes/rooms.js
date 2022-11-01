import express from "express";
import {
  createRoom,
  getRoom,
  getRooms,
  updateRoom,
  deleteRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);

//update the Room properties
router.put("/:id", verifyAdmin, updateRoom);

//UPDATE availability
router.put("/availability/:id", updateRoomAvailability);

//delete the Room from the database by its id
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/:id", getRoom);

router.get("/", getRooms);

export default router;
