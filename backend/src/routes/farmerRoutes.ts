import { Router } from "express";
import { createFarmer, getAllFarmers, getFarmerById, updateFarmer, deleteFarmer } from "../controllers/farmerController";

const router = Router();

router.post("/create-farmer", createFarmer);
router.get("/get-all-farmers", getAllFarmers);
router.get("/get-farmer/:id", getFarmerById);
router.put("/update-farmer/:id", updateFarmer);
router.delete("/delete-farmer/:id", deleteFarmer);

export default router;