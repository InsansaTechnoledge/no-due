import express from "express"; 
import {getChatHistory, sendReply, getAllConversations, connectWhatsApp, whatsappOAuthCallback} from "../controller/whatsapp.controller.js"

const router = express.Router();

router.get("/connect",connectWhatsApp);
router.get("/oauth/callback",whatsappOAuthCallback);
router.post("/reply", sendReply);
router.get("/history", getChatHistory);
router.get("/conversations", getAllConversations); //it will return the all onging conversations 

export default router;