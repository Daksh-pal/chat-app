import express from "express";
import { logout, register, remainingUser, login } from "../controllers/userController.js";
import { isAuthenticate } from "../middleware/isAuthenticate.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").delete(logout);
router.route("/").get(isAuthenticate,remainingUser);

export default router;