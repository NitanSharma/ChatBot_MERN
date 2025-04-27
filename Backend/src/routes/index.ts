import chatRouters from "./chats.router";
import userRouters from "./user.router";

const express = require('express');
const router = express.Router();

router.use("/user", userRouters)// /api/v1/user
router.use("/chats" ,chatRouters ); // /api/v1/chats

export default router;