import {Router} from "express"
import { checkUser, generateToken, getAllUsers, onboardUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user", checkUser);
router.post("/onboard-user", onboardUser);
router.get("/get-contacts", getAllUsers);
router.get("/generate-token/:userId", generateToken)

export default router;