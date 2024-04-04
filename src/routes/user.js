import express from "express";
import { LoginUser, RegisterUser } from "../controllers/usersController.js";

const router = express.Router();

router.post("/user/login", LoginUser);
router.post("/user/register", RegisterUser);

export default router;
