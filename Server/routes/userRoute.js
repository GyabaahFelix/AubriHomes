import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
  toFav,
} from "../controllers/userCntrl.js";
// import jwtCheck from "../config/auth0Config.js"; // 🔒 Auth0 temporarily disabled

const router = express.Router();

// router.post("/register", jwtCheck, createUser); // 🔒 Auth0 disabled
router.post("/register", createUser); // ✅ public for now

// router.post("/bookVisit/:id", jwtCheck, bookVisit); // 🔒 Auth0 disabled
router.post("/bookVisit/:id", bookVisit); // ✅ public for now

router.post("/allBookings", getAllBookings);

// router.post("/removeBooking/:id", jwtCheck, cancelBooking); // 🔒 Auth0 disabled
router.post("/removeBooking/:id", cancelBooking); // ✅ public for now

// router.post("/toFav/:rid", jwtCheck, toFav); // 🔒 Auth0 disabled
router.post("/toFav/:rid", toFav); // ✅ public for now

// router.post("/allFav/", jwtCheck, getAllFavorites); // 🔒 Auth0 disabled
router.post("/allFav/", getAllFavorites); // ✅ public for now

export { router as userRoute };
