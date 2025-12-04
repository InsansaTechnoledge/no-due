import express from "express";
import passport from "passport";
import { loginUser, registerUser, logoutUser, myProfile, handleGoogleAuth } from "../controller/user.controller.js";
import {isAuthenticated} from "../middleware/authMiddleware.js"


const router = express.Router();


router.get("/google", passport.authenticate("google", {scope:["profile","email"]}));
router.get("/google/callback", passport.authenticate("google", {session:false}), handleGoogleAuth);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);
router.get("/me", isAuthenticated, myProfile);

//just for testing
router.get("/dashboard", isAuthenticated, (req, res,next)=>{
    return res.status(200).json({messgage:"middleware working fine"});
  })

export default router;