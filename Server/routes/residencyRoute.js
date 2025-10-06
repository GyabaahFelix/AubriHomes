import express from "express";
import { createResidency, getAllResidencies, getResidency } from "../controllers/resdCntrl.js";
// import jwtCheck from "../config/auth0Config.js"; // 🔒 Auth0 temporarily disabled

const router = express.Router();

// router.post("/create", jwtCheck, createResidency); // 🔒 Auth0 disabled
router.post("/create", createResidency); // ✅ public route for now

router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
