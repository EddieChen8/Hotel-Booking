import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("hi, you are now logged in!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hi, you are now logged in and can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hi Admin, you are now logged in and can delete all account!");
// });

//update the User properties
router.put("/:id", verifyUser, updateUser);

//delete the User from the database by its id
router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getUsers);

export default router;
